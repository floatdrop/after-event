# after-event [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Usage

```js

var after   = require('after-event');
var events  = require('events');
var ee      = new events.EventEmitter();

after(ee, 'bang', function () { console.log('added before'); });

ee.emit('bang'); // Logs `added before

after(ee, 'bang', function () { console.log('Added after'); }); // Logs `added after`
```

## API

### after(eventemitter, event, cb)

Attaches event listener to `eventemitter` if such event was not emitted yet. Calls callback otherwise.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/after-event
[npm-image]: https://badge.fury.io/js/after-event.png

[travis-url]: http://travis-ci.org/floatdrop/after-event
[travis-image]: https://travis-ci.org/floatdrop/after-event.png?branch=master
