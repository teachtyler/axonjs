"use strict";

import isDefined from "../lib/isDefined";

/**
 * Gets property from Axon instance
 * @private
 * @param {Object} data Axon instance data container
 * @param {String} expression Directive expression
 * @returns {Mixed} property of instance
 */
const retrieveProp = function (data, expression) {
    const splitExpression = expression.split(".");
    const result = {
        val: null,
        ref: null
    };
    let container = data;
    let prop;

    splitExpression.forEach((propPath, index) => {
        prop = container[propPath];

        if (isDefined(prop)) {

            if (index < splitExpression.length - 1) {
                container = prop;
            } else {
                result.val = prop;
                result.ref = container;
            }
        } else {
            throw new Error(`Missing prop '${expression}'`);
        }
    });

    return result;
};

export default retrieveProp;
