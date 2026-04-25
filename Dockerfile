FROM ubuntu:24.04
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs
RUN node -v && npm -v

COPY . .
RUN npm install

EXPOSE 5173
ENTRYPOINT ["npm", "run", "dev", "--", "--host"]
