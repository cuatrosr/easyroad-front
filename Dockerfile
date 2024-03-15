FROM node:20-alpine3.18 AS base

ENV DIR /project
WORKDIR $DIR
ARG NPM_TOKEN

FROM base AS build

ENV VITE_URL_BACK_HTTP http://57.151.39.186:3500
ENV VITE_URL_BACK_WS http://57.151.39.186:3600

RUN apk update && apk add --no-cache dumb-init=1.2.5-r2

COPY package.json pnpm-lock.yaml $DIR
RUN npm install -g pnpm
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > "$DIR/.npmrc" && \
  pnpm install --frozen-lockfile && \
  rm -f .npmrc

COPY index.html $DIR
COPY vite.config.js $DIR
COPY public $DIR/public
COPY src $DIR/src

RUN pnpm run build && \
  pnpm prune --prod --config.ignore-scripts=true

FROM nginx:alpine3.18 AS production

WORKDIR /usr/share/nginx/html

COPY --from=build /project/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]