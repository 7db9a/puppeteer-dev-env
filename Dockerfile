FROM puppeteer

USER root

COPY . /app

WORKDIR /app/puppeteer-renderer
