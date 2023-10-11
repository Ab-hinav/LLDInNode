"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
var Directory = /** @class */ (function () {
    function Directory(name, list) {
        this.name = name;
        this.list = list;
    }
    Directory.prototype.add = function (fileSytem) {
        this.list.push(fileSytem);
    };
    Directory.prototype.ls = function () {
        console.log(this.name);
        this.list.forEach(function (fileSytem) { return fileSytem.ls(); });
    };
    return Directory;
}());
exports.Directory = Directory;
