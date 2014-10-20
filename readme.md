# after-event [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

__Experimental__ - almost never works. Use event emitter by hands.

## Usage

```js

var after   = require('after-event');
var events  = require('events');
var ee      = new events.EventEmitter();

after(ee, 'bang', function (data) { console.log(data); });

ee.emit('bang', 'emitted bang'); // Logs `emitted bang` and saves arguments to proceeding calls

after(ee, 'bang', function (data) { console.log('other' + data); }); // Logs `other emitted bang` without emit called
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
