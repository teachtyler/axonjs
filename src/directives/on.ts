import { bindEvent } from "../dom/element";
import { IAxonDirective, IAxonNode } from "../interfaces";
import { applyMethodContext } from "../vdom/controller";
import { evalMethod } from "../vdom/controller";

/**
 * v-on init directive
 *
 * @private
 * @param {Object} directive
 * @param {HTMLElement} element
 * @param {AxonNode} node
 * @returns {boolean}
 */
const directiveOnInit = (
    directive: IAxonDirective,
    element: HTMLElement,
    node: IAxonNode
) => {
    bindEvent(element, directive.opt, (e: Event) =>
        applyMethodContext(evalMethod(directive.content, node), [e])
    );

    return true;
};

export { directiveOnInit };
