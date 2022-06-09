(function() {
    'use strict';

    var exports = {};

    exports.toSafeURL = function(str, char) {
        var re = /[\{\}\[\].,;:|\)*~`!^<>@\$%\\\(\'\"\s]/g; // ?/#+&=
        return str.replace(re, char || "_");
    }

    exports.capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (typeof(window.textConverter) === "undefined") {
        window.textConverter = exports;
    }
})();