
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.c2 = global.c2 || {}));
}(this, function (exports) {
    'use strict';



    function calcImcLife(imc) {
        let result = 0;

        if (imc <= 27) {
            result += 0;
        }
        if (imc > 27 && imc <= 30) {
            result += 25;
        }
        if (imc > 30 && imc <= 32) {
            result += 50;
        }
        if (imc > 32 && imc <= 34) {
            result += 75;
        }
        if (imc > 34) {
            result += 999;
        }
        return result;
    }
    function calcImcILT(imc, age) {
        let result = 0;
        if (age <= 34) {
            if (imc <= 16) {
                result += 999;
            }
            if (imc > 16 && imc <= 18) {
                result += 50;
            }
            if (imc > 18 && imc <= 28) {
                result += 0;
            }
            if (imc > 28 && imc <= 30) {
                result += 25;
            }
            if (imc > 30 && imc <= 32) {
                result += 50;
            }
            if (imc > 32 && imc <= 34) {
                result += 75;
            }
            if (imc > 34 && imc <= 37) {
                result += 100;
            }
            if (imc > 37 && imc <= 40) {
                result += 125;
            }
            if (imc > 40 && imc <= 43) {
                result += 150;
            }
            if (imc > 43) {
                result += 999;
            }
        }
        if (age > 34 && age <= 55) {
            if (imc <= 16) {
                result += 999;
            }
            if (imc > 16 && imc <= 18) {
                result += 25;
            }
            if (imc > 18 && imc <= 28) {
                result += 0;
            }
            if (imc > 28 && imc <= 30) {
                result += 25;
            }
            if (imc > 30 && imc <= 34) {
                result += 50;
            }
            if (imc > 34 && imc <= 37) {
                result += 75;
            }
            if (imc > 37 && imc <= 40) {
                result += 100;
            }
            if (imc > 40 && imc <= 43) {
                result += 125;
            }
            if (imc > 43) {
                result += 999;
            }
        }
        if (age > 55) {
            if (imc <= 16) {
                result += 999;
            }
            if (imc > 16 && imc <= 18) {
                result += 25;
            }
            if (imc > 18 && imc <= 30) {
                result += 0;
            }
            if (imc > 30 && imc <= 32) {
                result += 25;
            }
            if (imc > 32 && imc <= 37) {
                result += 50;
            }
            if (imc > 37 && imc <= 40) {
                result += 75;
            }
            if (imc > 40 && imc <= 43) {
                result += 100;
            }
            if (imc > 43) {
                result += 999;
            }
        }
        return result;
    }

    // TO BE DONE
    function calcImc(imc, age) {
        let imcLife = calcImcLife(imc);
        let imcILT = calcImcILT(imc, age);

        return {
            life: imcLife,
            disability: imcLife,
            accident: imcLife,
            temporary: imcILT
        }
    }




    exports.calcImc = calcImc;


    Object.defineProperty(exports, '__esModule', { value: true });

}));