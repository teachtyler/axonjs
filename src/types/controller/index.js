"use strict";

import queryDirective from "../../dom/query/queryDirective";
import bindDirectives from "../../dom/bind/bindDirectives";
//import bindExpressions from "../dom/bind/expressions";
//import digest from "../dom/digest/digest";

/**
 * Constructor function for the controller type
 * @private
 * @param {Object} _module The module object
 * @param {Array} dependencies Array of dependency contents
 * @returns {Mixed} Initialized module
 */
const controller = function(_module, dependencies) {
    const _this = this;

    //First value gets ignored by calling 'new' like this, so we need to fill it with something
    dependencies.unshift(0);

    //Apply into new constructor by binding applying the bind method.
    //@see: {@link http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible }
    _module.fn = new(Function.prototype.bind.apply(_module.fn, dependencies));


    //Bind Context
    _module.fn.$context = queryDirective(_this.$context, "controller", _module.name, false);
    //ctrl.$expressions = bindExpressions(_module.fn);
    _module.fn.$directives = bindDirectives(_module.fn);
    //run first digest
    //digest(_module.fn);

    console.log("mainCtrl", _module.fn);

    return _module;
};

export default controller;
