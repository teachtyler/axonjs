"use strict";

import {
    _document,
    _domNameSpace,
    _expressionRegex
} from "../../../constants";
import {
    replaceFrom
} from "../../../util";

export default {
    onBind: function (ctrl, context) {
        const result = [];
        const nodes = getTextNodes(context);
        let match;

        //Iterate Nodes
        nodes.forEach(node => {
            //Iterate Regex
            while ((match = _expressionRegex.exec(node.textContent)) !== null) {
                if (match.index === _expressionRegex.lastIndex) {
                    _expressionRegex.lastIndex++;
                }
                /*const _expression = "expression";
                const _tagName = `${_domNameSpace}-${_expression}`;
                const element = _document.createElement(_tagName);

                element.setAttribute(`${_tagName}-data`, match[1]);
                element.textContent = match[1];

                window.a = node.parentNode;
                node.parentNode.innerHTML = node.parentNode.innerHTML.replace(match[0], element.outerHTML);
*/
                result.push({
                    match: match[0],
                    data: match[1],
                    val: match[0],
                    index: match.index,
                    parent: node
                });
            }
        });

        return result;

        //Modified version of http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
        function getTextNodes(node) {
            let all = [];
            for (node = node.firstChild; node; node = node.nextSibling) {
                if (node.nodeType === 3 && node.parentNode.nodeName !== "SCRIPT") {
                    all.push(node);
                } else {
                    all = all.concat(getTextNodes(node));
                }
            }
            return all;
        }
    },
    onDigest: function (ctrl, context, entry) {
        const result = ctrl[entry.data];

        if (typeof result !== "undefined") {
            console.log("EXPR:", entry.val, result, entry.index);
            entry.parent.textContent = replaceFrom(entry.parent.textContent, entry.val, result, entry.index);
            entry.val = result;

            return result;
        } else {
            throw "Error in Expression:" + entry.data;
        }
    }
};
