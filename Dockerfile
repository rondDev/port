##### Stage 1 - Development - Generate dist folder
FROM node:21 AS builder

# RUN npm install -g npm

WORKDIR /usr/app
COPY package.json ./
COPY .npmrc ./
RUN npm install --force
RUN cp -R node_modules prod_node_modules
COPY . .
RUN npm run build
##### Stage 2 - Production
FROM builder as production
WORKDIR /usr/app
COPY --from=builder /usr/app/prod_node_modules ./node_modules
COPY --from=builder /usr/app/package*.json ./
ENV NODE_ENV=production
COPY --from=builder /usr/app/.svelte-kit ./.svelte-kit
CMD [ "npm", "start" ]
