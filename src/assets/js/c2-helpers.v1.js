
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.c2 = global.c2 || {}));
}(this, function (exports) {
    'use strict';

    function defaultSeparation(a, b) {
        return a.parent === b.parent ? 1 : 2;
    }



    exports.defaultSeparation = defaultSeparation;


    Object.defineProperty(exports, '__esModule', { value: true });

}));