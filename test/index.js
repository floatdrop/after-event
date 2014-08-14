/* global it */

var after = require('../index.js');
var events  = require('events');
var ee      = new events.EventEmitter();

it('should call callback on event once', function (done) {
    after(ee, 'bang', done);
    ee.emit('bang');
    ee.emit('bang');
});

it('should call callback after event', function (done) {
    after(ee, 'bang');
    ee.emit('bang');
    after(ee, 'bang', done);
});
