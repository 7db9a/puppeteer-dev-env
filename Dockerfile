FROM puppeteer

USER root

COPY . /app

RUN cd /app/puppeteer-renderer && npm install --quiet

EXPOSE 3000

WORKDIR /app/puppeteer-renderer
