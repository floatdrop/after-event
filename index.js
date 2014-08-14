function nop () { }

module.exports = function after (ee, event, cb) {
    cb = cb || nop;

    if (!ee._after) { ee._after = {}; }

    if (ee._after[event]) { return cb.apply(ee, ee._after[event]); }

    ee.once(event, function () {
        ee._after[event] = arguments;
        cb.apply(ee, arguments);
    });
};
