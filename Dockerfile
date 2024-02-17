FROM node:20-alpine3.18 as production

WORKDIR /app

COPY package.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 5173

CMD [ "pnpm", "run", "preview" ]