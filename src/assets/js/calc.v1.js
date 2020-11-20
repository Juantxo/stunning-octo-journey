
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global["calc"] = global.calc || {})));
})(this, function (exports) {
  "use strict";

  var version = "1.0.0";

  function sayHello (a, b) {
    return "This is the awesome calc " + a + ' ' + b + "!"
  }

  exports.sayHello = sayHello;

  Object.defineProperty(exports, "__esModule", { value: true });
});
