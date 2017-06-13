"use strict";

import {
    directiveModelInit,
    directiveModelRender
} from "./modules/directiveModel";
import {
    directiveBindRender
} from "./modules/directiveBind";
import {
    directiveForRender
} from "./modules/directiveFor";
import {
    directiveTextRender
} from "./modules/directiveText";
import {
    directiveHTMLRender
} from "./modules/directiveHTML";
import {
    directiveIfBoth
} from "./modules/directiveIf";
import {
    directiveOnInit
} from "./modules/directiveOn";

const directives = {
    "model": {
        init: directiveModelInit,
        render: directiveModelRender
    },
    "bind": {
        render: directiveBindRender
    },
    "for": {
        render: directiveForRender
    },
    "text": {
        render: directiveTextRender
    },
    "html": {
        render: directiveHTMLRender
    },
    "if": {
        init: directiveIfBoth,
        render: directiveIfBoth
    },
    "on": {
        init: directiveOnInit,
    },
};


export default directives;
