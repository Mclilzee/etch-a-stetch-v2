FROM node:25-alpine3.22 AS build-env
WORKDIR /usr/src/app

COPY . .
RUN npm install && npm run build

FROM busybox:1.37
RUN adduser -D static
USER static
WORKDIR /home/static
COPY --from=build-env /usr/src/app/dist .

EXPOSE 8080
CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]
