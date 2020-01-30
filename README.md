# puppeteer-dev-env

My puppeteer development environment.


## Getting started

```
git clone https://github.com/7db9a/puppeteer-dev-env
docker build -t puppeteer docker-puppeteer
docker build -t puppeteer-renderer .
docker-compose up
```

Recreate the container after you make a code change:

```
docker-compose up --force-recreate
```

docker-puppeteer and puppeter-renderer are third-party git submodules.

***I use the Dockerfile in the project's root dir for the puppeteer-renderer build because I want to directly use the original docker-puppeter Dockerfile.***
