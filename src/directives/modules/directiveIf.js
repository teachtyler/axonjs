"use strict";

import evaluateExpression from "../../controller/evaluateExpression";
import {
    DOM_ATTR_HIDDEN
} from "../../lib/constants";

const directiveIfRender = function (node, directive,instanceData) {
    const propValue = evaluateExpression(instanceData, directive.val);
    const result = Boolean(propValue);

    if (result) {
        node.removeAttribute(DOM_ATTR_HIDDEN);
    } else {
        node.setAttribute(DOM_ATTR_HIDDEN, DOM_ATTR_HIDDEN);
    }

    return result;
};

export {
    directiveIfRender
};
