"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileSystem_1 = require("./FileSystem");
var Arithmetic_1 = require("./Arithmetic");
// Example 1
var movieDirectory = new FileSystem_1.Directory("Movies", []);
var moviewComedy = new FileSystem_1.File("Comedy", 12);
movieDirectory.add(moviewComedy);
var movieHorror = new FileSystem_1.File("Horror", 14);
movieDirectory.add(movieHorror);
var movieRomance = new FileSystem_1.File("Romance", 16);
var songsDir = new FileSystem_1.Directory("Songs", []);
var songLove = new FileSystem_1.File("Love", 10);
songsDir.add(songLove);
movieDirectory.add(songsDir);
movieDirectory.ls();
// Example 2
var exp = new Arithmetic_1.Expression(new Arithmetic_1.Number(10), Arithmetic_1.Operation.ADD, new Arithmetic_1.Number(3));
var exp1 = new Arithmetic_1.Expression(exp, Arithmetic_1.Operation.MULTIPLY, new Arithmetic_1.Number(5));
console.log(exp1.evaluate());
