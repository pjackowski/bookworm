# Bookworm

This javascript will download any book-like content for you.


## Quick Start

1) Install Node.js.

2) Run server script, for example:

```sh
$ node server.js 9999 book-you-want-to-crawl.html
```

3) Inject JavaScript functions from client.html by using Chrome Dev Tools, Firefox Firebug or similar:

```js
//window.crawl
//window.getRandomTimeout
//window.kickoff
```

4) Go to first page you want to download and kickoff script, for example:

```js
window.kickoff({min: 10, max:20, port: 9999});
```

## Documentation

1) Server

```sh
$ node server.js PORT FILE_NAME
```

2) Client

```js
window.kickoff({

    //timeout (range) in seconds before navigating to next page,
    //sneaky human like behaviour, but could be improved by simulating more activity (pauses, etc)
    //defaults is 20-60
    min: 10,
    max:20,

    //server port, default is 9999
    port: 9999,

    //content selector, default '.htmlcontent'
    content: '.htmlcontent',

    //navigation (button or link) selector, default '#next'
    navigation: '#next'

});
```