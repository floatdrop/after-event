function nop () { }

module.exports = function after (ee, event, cb) {
    cb = cb || nop;
    ee.once(event, cb);
};
