"use strict";

import Chevron from "../node_modules/chevronjs/src/main.js";

import controllerFn from "./types/controller";

import queryDirective from "./dom/query/directives/query";
/**
 * Basic Axon Constructor
 *
 * @constructor
 * @param {String} id To identify the instance
 * @returns {Object} Returns Axon instance
 */
let Axon = function(id) {
    const _this = this;

    //Instance Id
    _this.id = id;
    //Instance container
    _this.cv = new Chevron(id + "Container");
    //context
    _this.context = queryDirective("app", id)[0];

    //Init Axon types
    _this.cv.extend("controller", controllerFn);
};

//Bind Chevron methods directly to parent
const methods = ["access", "extend", "provider", "service", "factory", "controller"];

methods.forEach(method => {
    Axon.prototype[method] = function() {
        return this.cv[method].apply(this.cv, Array.from(arguments));
    };
});


export default Axon;
