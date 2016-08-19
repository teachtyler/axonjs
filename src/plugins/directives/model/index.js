"use strict";

import queryDirective from "../../../dom/query/directives/query";
import readDirective from "../../../dom/query/directives/read";

import digest from "../../../dom/digest/digest";

import bind from "../../../dom/bind/bind";

import {
    _window
} from "../../../constants";

import {
    eachNode
} from "../../../util";

export default {
    onBind: function(ctrl, context) {
        const result = [];
        const elements = queryDirective("model", "*", context);

        bind(elements, "change", modelEvent);
        bind(elements, "input", modelEvent);

        eachNode(elements, (element, index) => {
            result.push({
                index,
                element,
                type: "model",
                value: readDirective(element, "model")
            });
        });

        return result;

        function modelEvent(ev, dom) {
            _window.setTimeout(() => {
                const content = dom.value;
                const modelFor = readDirective(dom, "model");

                //console.log("MODEL:", modelFor, content);
                ctrl[modelFor] = content;

                digest(ctrl);
            }, 5);
        }
    },
    onDigest: function(ctrl, context, entry) {
        entry.element.value = ctrl[entry.value];
    }
};
