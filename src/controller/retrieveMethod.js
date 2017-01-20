"use strict";

import evaluateExpression from "./evaluateExpression";

/**
 * Gets method from Axon instance
 * @private
 * @param {Object} methods Axon instance methods container
 * @param {String} expression Directive expression
 * @returns {Function} method of instance
 */
const retrieveMethod = function (methods, expression) {
    const expressionSplit = expression.substr(0, expression.length - 1).split("(");
    const methodName = expressionSplit[0];
    const methodArgs = expressionSplit[1].split(",").filter(item => item !== "").map(arg => {
        return evaluateExpression(methods, arg);
    });
    const methodFn = methods[methodName];

    if (typeof methodFn === "function") {
        return {
            fn: methodFn,
            args: methodArgs
        };
    } else {
        throw new Error(`Missing method '${expression}'`);
    }
};

export default retrieveMethod;
