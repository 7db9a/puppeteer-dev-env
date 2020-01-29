# puppeteer-dev-env

My puppeteer development environment.

## Setup

**Build puppeteer image:**

`docker build -t puppeteer docker/docker-puppeteer`

docker-puppeteer is a third-party git submodule.

**Build puppeteer-renderer image:**

`docker build -t puppeteer-renderer .`

I use the Dockerfile in the current directory and not from the submodule puppeteer-renderer's Dockerfile because I want to directly use the original docker-puppeter Dockerfile.

**Start up the renderer**

`docker-compose up`
