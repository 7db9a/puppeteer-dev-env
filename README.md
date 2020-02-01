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

It screenshots example.com and outputs screenshot.png. To run other examples, see [Examples](#examples).

## Development

Recreate the container after a code change:

`docker-compose up --force-recreate`

The host's project directory is mounted to the container, per `docker-compose.yml` instructions.

## Examples

Uncomment an example in `docker-compose.yml` and then run `docker-compose up`.

**[1. get_text_value](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/get_text_value.js)**

**[2. get_list_of_links](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/get_list_of_links.js)**

**[3. get_text_value_2](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/get_text_value_2.js)**

**[4. screenshot](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/screenshot.js)**

**[5. screenshot-fullpage](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/screenshot.js)**

**[6. crawlsite](https://github.com/7db9a/puppeteer-dev-env/blob/master/examples/crawlsite.js)**
