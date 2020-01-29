# puppeteer-dev-env

## Setup

From the root of the project:

```
docker build -t puppeteer docker/docker-puppeteer
docker build -t puppeteer-renderer .
```

docker-puppeteer and puppeteer-renderer are git submodules.

Start the service:

`docker-compose up`
