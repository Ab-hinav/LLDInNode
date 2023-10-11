"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
var Operation_1 = require("./Operation");
var Expression = /** @class */ (function () {
    function Expression(leftExpression, operation, rightExpression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operation = operation;
    }
    Expression.prototype.evaluate = function () {
        if (this.operation === Operation_1.Operation.ADD) {
            return this.leftExpression.evaluate() + this.rightExpression.evaluate();
        }
        else if (this.operation === Operation_1.Operation.SUBTRACT) {
            return this.leftExpression.evaluate() - this.rightExpression.evaluate();
        }
        else if (this.operation === Operation_1.Operation.MULTIPLY) {
            return this.leftExpression.evaluate() * this.rightExpression.evaluate();
        }
        else {
            return this.leftExpression.evaluate() / this.rightExpression.evaluate();
        }
    };
    return Expression;
}());
exports.Expression = Expression;
