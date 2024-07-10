# use the offifical node.js runtime as the base image
FROM node:20-bookworm-slim

# set the working directory inside the container
WORKDIR /app

# copy and set the package.json file to working directory
COPY package.json yarn.lock ./

# install the dependencies
RUN yarn install --frozen-lockfile

# copy the rest of the application code 
COPY . .

# export the port of development mode
EXPOSE 3000

# run the development command
CMD ["yarn", "dev"]


# FROM node:20-bookworm-slim AS development
# WORKDIR /app
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV NODE_ENV=development
# EXPOSE 3000
# CMD ["yarn dev"]


# FROM node:20-bookworm-slim AS dependencies
# ENV NODE_ENV=production
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile


# FROM node:20-bookworm-slim AS builder
# ENV NODE_ENV=development
# WORKDIR /app
# COPY . .
# RUN yarn install --frozen-lockfile && NODE_ENV=production yarn build


# FROM node:20-bookworm-slim AS production
# WORKDIR /app
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV NODE_ENV=production
# COPY --chown=node --from=builder /app/next.config.js ./
# COPY --chown=node --from=builder /app/public ./public
# COPY --chown=node --from=builder /app/.next ./.next
# COPY --chown=node --from=builder /app/yarn.lock /app/package.json ./
# COPY --chown=node --from=dependencies /app/node_modules ./node_modules
# USER node
# EXPOSE 3000
# CMD [ "yarn", "start" ]


