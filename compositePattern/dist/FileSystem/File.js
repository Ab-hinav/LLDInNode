"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var File = /** @class */ (function () {
    function File(name, size) {
        this.name = name;
        this.size = size;
    }
    File.prototype.ls = function () {
        console.log(this.name);
    };
    return File;
}());
exports.File = File;
