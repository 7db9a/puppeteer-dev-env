# puppeteer-dev-env

My puppeteer development environment.

```
git clone https://github.com/7db9a/puppeteer-dev-env
docker build -t puppeteer docker-puppeteer
docker build -t puppeteer-renderer .
docker-compose up
```

docker-puppeteer and puppeter-renderer are third-party git submodules.

***I use the Dockerfile in the project's root dir for the puppeteer-renderer build because I want to directly use the original docker-puppeter Dockerfile.***
