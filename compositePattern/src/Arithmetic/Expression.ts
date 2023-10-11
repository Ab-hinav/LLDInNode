import { ArithmeticExpression } from "./ArithMeticExpression";
import { Operation } from "./Operation";

export class Expression implements ArithmeticExpression{

    leftExpression: ArithmeticExpression;
    rightExpression: ArithmeticExpression;
    operation: Operation;

    constructor(leftExpression: ArithmeticExpression, operation: Operation, rightExpression: ArithmeticExpression){
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operation = operation;
    }

    evaluate(): number {
        if(this.operation === Operation.ADD){
            return this.leftExpression.evaluate() + this.rightExpression.evaluate();
        }else if(this.operation === Operation.SUBTRACT){
            return this.leftExpression.evaluate() - this.rightExpression.evaluate();
        }else if(this.operation === Operation.MULTIPLY){
            return this.leftExpression.evaluate() * this.rightExpression.evaluate();
        }else{
            return this.leftExpression.evaluate() / this.rightExpression.evaluate();
        }
    }

}
