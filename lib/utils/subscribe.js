"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribe = void 0;
var Subscribe = /** @class */ (function () {
    function Subscribe() {
        this.pound = [];
    }
    Subscribe.prototype.add = function (fun) {
        this.pound.push(fun);
    };
    Subscribe.prototype.remove = function (fun) {
        var index = this.pound.findIndex(function (item) {
            return Object.is(fun, item);
        });
        if (index > -1) {
            this.pound.splice(index, 1);
        }
    };
    Subscribe.prototype.triggle = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.pound.forEach(function (item) {
            item.call.apply(item, __spreadArray([_this], args));
        });
    };
    return Subscribe;
}());
exports.Subscribe = Subscribe;
// export const getEnv = () => {
console.log(process.env.ROLE);
// }
