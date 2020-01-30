# puppeteer-dev-env

My puppeteer development environment.


## Getting started

```
git clone --recurse-submodules -j8 https://github.com/7db9a/puppeteer-dev-env
cd puppeteer-dev-env
docker build -t puppeteer docker-puppeteer
docker-compose up
```

Recreate the container after you make a code change:

```
docker-compose up --force-recreate
```
