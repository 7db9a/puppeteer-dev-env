# puppeteer-dev-env

My puppeteer development environment.


## Getting started

```
git clone --recurse https://github.com/7db9a/puppeteer-dev-env
cd puppeteer-dev-env
docker build -t puppeteer docker-puppeteer
```

**Run an example:**

`docker-compose up`

By default, it screenshots example.com and outputs `screenshot.png`.

To run a different example, uncomment an alternative command in `docker-compose.yml` and try again.

**After a code (non-docker related) change:**

`docker-compose up --force-recreate`

The host's project directory is mounted to the container, per `docker-compose.yml` instructions.
