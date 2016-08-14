"use strict";

/**
 * Digest & renders dom
 *
 * @private
 * @param {Object} ctrl The Controller
 * @return {Node} context The Controller context
 */
export default function(ctrl) {
    //@TODO implement debounce

    console.log("digest");
    //Calc expressions
    ctrl.$expressions.forEach(expression => {
      evaluate(ctrl,expression);
    });
}
