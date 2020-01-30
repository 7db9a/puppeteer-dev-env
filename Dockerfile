FROM puppeteer

USER root

COPY . /app

EXPOSE 3000

WORKDIR /app/puppeteer-renderer
