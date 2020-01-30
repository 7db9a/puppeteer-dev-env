# puppeteer-dev-env

My puppeteer development environment.


## Getting started

```
git clone --recurse https://github.com/7db9a/puppeteer-dev-env
cd puppeteer-dev-env
docker build -t puppeteer docker-puppeteer
```

**Run default example:**

`docker-compose up`

It screenshots example.com and outputs `screenshot.png`.

**Run a different example:**

Uncomment an alternate `command` in `docker-compose.yml` and run `docker-compose up`, again.

**Recreate the container after making code changes:**

`docker-compose up --force-recreate`

The host's project directory is mounted to the container, per `docker-compose.yml` instructions.
