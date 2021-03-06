# Bookworm

This JS script downloads sequential HTML books via browser, so you can use files in text-to-speech software.

Project isn't maintained anymore.


## Quick Start

1) Install Node.js.

2) Run server script, for example:

```sh
$ node server.js 9999 filename.html
```

3) Inject JavaScript functions from client.html.


4) Go to first page you want to download and kickoff script, for example:

```js
window.crawl({min: 10, max:20, port: 9999});
```

## Documentation

1) Server

```sh
$ node server.js PORT FILE_NAME
```

2) Client

```js
min          (default: 20)                        //minimum timeout in seconds before navigating to next page
max          (default: 60)                        //maximum timeout in seconds before navigating to next page
recover      (default: 60)                        //timeout before trying to navigate again (in case of network error)
port         (default: 9999)                      //localhost server port
content      (default: '.htmlcontent')            //page content selector
description  (default: '#lefttabtoc a.current')   //chapter title selector
navigation   (default: '.navcenter_right')        //next page navigation selector
speed        (default: 0)                         //amount of characters "read" per minute to simulate human behaviour
sniper       (default: false)                     //saves immediately current page
images       (default: false)                     //adds links to images to payload if set to true
```

```js
window.crawl({
    min: 20,
    max: 60
    port: 25000
});
```
