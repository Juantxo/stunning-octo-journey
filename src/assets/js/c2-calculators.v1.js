
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.c2 = global.c2 || {}));
}(this, function (exports) {
    'use strict';

    let $diabetes = {
        life: 0,
        disability: 0,
        accident: 0,
        temporary: 0
    }


    function defaultSeparation(a, b) {
        return a.parent === b.parent ? 1 : 2;
    }

    function calcDiabetesLife(type, years) {
        let result = 0;

        if (type === 't1') {
            if (years < 5) {
                result += 0;
            }
            if (years >= 5 && years <= 20) {
                result += 50;
            }

            if (years > 20) {
                result += 999;
            }
        }
        if (type === 't2') {
            if (years <= 10) {
                result += 0;
            }

            if (years > 10) {
                result += 50;
            }
        }
        return result;
    }

    function calcDiabetesTemp(type, years) {
        let result = 0;
        if (type === 't1') {

            if (years <= 10) {
                result += 25;
            }
            if (years > 11 && years <= 20) {
                result += 50;
            }
            if (years > 20 && years <= 25) {
                result += 75;
            }
            if (years > 25 && years <= 30) {
                result += 100;
            }
            if (years > 30 && years <= 35) {
                result += 150;
            }
            if (years > 35) {
                result += 999;
            }
        }

        if (type === 't2') {

            if (years <= 5) {
                result += 25;
            }
            if (years > 5 && years <= 10) {
                result += 50;
            }
            if (years > 10 && years <= 15) {
                result += 75;
            }
            if (years > 15) {
                result += 100;
            }
        }
        return result;
    }
    function calcDiabetes(type, years) {
        let diabetesLife = calcDiabetesLife(type, years);
        let diabetesTemp = calcDiabetesTemp(type, years);
        return {
            life: diabetesLife,
            disability: diabetesLife,
            accident: diabetesLife,
            temporary: diabetesTemp
        }
    }



    exports.defaultSeparation = defaultSeparation;
    exports.calcDiabetes = calcDiabetes;


    Object.defineProperty(exports, '__esModule', { value: true });

}));