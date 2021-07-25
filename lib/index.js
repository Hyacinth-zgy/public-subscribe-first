"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscribe_1 = require("./utils/subscribe");
console.log(process.env.NODE_ENV);
console.log(process.env.ROLE);
function default_1() {
    return new subscribe_1.Subscribe();
}
exports.default = default_1;
