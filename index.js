function nop () { }

module.exports = function after (ee, event, cb) {
    cb = cb || nop;

    if (!ee._after) { ee._after = {}; }

    if (ee._after[event]) { return cb.apply(ee, ee._after[event]); }

    function update() {
        ee._after[event] = arguments;
    }

    ee.once(event, function () {
        update();
        cb.apply(ee, arguments);
    });

    ee.on(event, update);
};
