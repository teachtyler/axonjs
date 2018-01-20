import { mapFromObject } from "lightdash";
import { directiveModelInit, directiveModelRender } from "./model";
import { directiveBindRender } from "./bind";
import { directiveForInit, directiveForRender } from "./for";
import { directiveTextRender } from "./text";
import { directiveHTMLRender } from "./html";
import { directiveIfRender } from "./if";
import { directiveOnInit } from "./on";
import { IAxonDirectiveDeclaration } from "../interfaces";
import { EDirectiveFn } from "../enums";

/**
 * Some of the directive keys are reserved words.
 *
 * should work fine, but be careful.
 *
 * @private
 */
const directives: Map<string, IAxonDirectiveDeclaration> = mapFromObject({
    if: {
        [EDirectiveFn.render]: directiveIfRender
    },
    on: {
        [EDirectiveFn.init]: directiveOnInit
    },
    model: {
        [EDirectiveFn.init]: directiveModelInit,
        [EDirectiveFn.render]: directiveModelRender
    },
    bind: {
        [EDirectiveFn.render]: directiveBindRender
    },
    text: {
        [EDirectiveFn.render]: directiveTextRender
    },
    html: {
        [EDirectiveFn.render]: directiveHTMLRender
    },
    for: {
        [EDirectiveFn.init]: directiveForInit,
        [EDirectiveFn.render]: directiveForRender
    }
});

export default directives;
