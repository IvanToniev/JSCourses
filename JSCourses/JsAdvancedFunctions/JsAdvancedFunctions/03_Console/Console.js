var specConsole = (function () {
    function _format(str /*, params */) {
        var selfArguments = arguments;

        return str.replace(/\{(\d+)\}/g, function (match, p1) {
            return selfArguments[+p1 + 1];
        });
    }

    return {
        writeLine: function () {
            console.log(_format.apply(null, arguments));
        },

        writeError: function () {
            console.error(_format.apply(null, arguments));
        },

        writeWarning: function () {
            console.warn(_format.apply(null, arguments));
        }
    };
}());