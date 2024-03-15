FROM node:20-alpine3.18 AS base

ENV DIR /project
WORKDIR $DIR
ARG NPM_TOKEN

FROM base AS build

RUN apk update && apk add --no-cache dumb-init=1.2.5-r2

COPY package.json pnpm-lock.yaml $DIR
RUN npm install -g pnpm
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > "$DIR/.npmrc" && \
  pnpm install --frozen-lockfile && \
  rm -f .npmrc

COPY vite.config.js $DIR
COPY public $DIR/public
COPY src $DIR/src

RUN pnpm run build && \
  pnpm run prune --prod --config.ignore-scripts=true

FROM base AS production

ENV NODE_ENV=production
ENV USER=node

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/node_modules $DIR/node_modules
COPY --from=build $DIR/dist $DIR/dist

USER $USER
EXPOSE 5173
CMD ["dumb-init", "node", "dist/index.js"]