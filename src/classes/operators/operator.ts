import { OperatorAssoc, OperatorToken } from '../../const';

export class Operator {
  public precedence!: number;
  public assoc!: OperatorAssoc;
  public token!: OperatorToken;
  public paramsCount: number = 2;

  public method(a: number, b: number, operator?: Operator): void {
  }

  public greaterThan(operator: Operator) {
    return this.precedence > operator.precedence;
  }

  public greaterThanOrEqual(operator: Operator) {
    return this.precedence >= operator.precedence;
  }

  public equal(operator: Operator) {
    return this.precedence === operator.precedence;
  }

  public lessThan(operator: Operator) {
    return this.precedence < operator.precedence;
  }

  public lessThanOrEqual(operator: Operator) {
    return this.precedence <= operator.precedence;
  }

  public leftAssoc() {
    return this.assoc === OperatorAssoc.LEFT;
  }

  public rightAssoc() {
    return this.assoc === OperatorAssoc.RIGHT;
  }
}
