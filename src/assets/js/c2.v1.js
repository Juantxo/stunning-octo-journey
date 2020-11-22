(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
      ? define(["exports"], factory)
      : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
        factory((global["c2"] = global.c2 || {})));
})(this, function (exports) {

  "use strict";
  var version = "1.0.0";

  function sayHello(a, b) {
    return "This is the awesome c2 " + a + ' ' + b + "!";
  }

  function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }

  function yearIsHigher(dob) {
    if (Date.now() - dob.getTime() < 0) {
      return true;
    }
    return false;

  }
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    var age_dt_full = age_dt.getUTCFullYear();

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }




  exports.sayHello = sayHello;
  exports.addEventListenerList = addEventListenerList;
  exports.calculate_age = calculate_age;
  exports.yearIsHigher = yearIsHigher;


  Object.defineProperty(exports, "__esModule", { value: true });
});
