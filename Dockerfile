FROM node:18-bullseye-slim
ARG NPM_TOKEN

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install -g npm@8.19.3
ENV PACT_SKIP_BINARY_INSTALL=true

# create .npmrc file
RUN printf \
    "_auth = ${NPM_TOKEN}\n\
    always-auth = true\n\
    registry = https://ironsrc.jfrog.io/ironsrc/api/npm/npm-virtual" > /app/.npmrc

RUN npm ci --omit=dev

EXPOSE 5000

CMD [ "npm", "start" ]