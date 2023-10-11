import { ArithmeticExpression } from "./ArithMeticExpression";

export class Number implements ArithmeticExpression {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }
}