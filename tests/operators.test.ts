import { Add, Multiply, Operator, Operators, Percent, Pow, Subtract } from '../src/classes/operators';
import { expect } from 'chai';
import { Sqrt } from '../src/classes/operators/sqrt';
import { OperatorToken } from '../src/const';

describe('Operators', () => {
  it('Addition', () => {
    const operator = Operators.parse(OperatorToken.PLUS);
    expect(operator.method(1, 2)).equal(3);
  });

  it('Subtraction', () => {
    const operator = Operators.parse(OperatorToken.MINUS_1);
    expect(operator.method(5, 1)).equal(4);
  });

  it('Multiply', () => {
    const operator = Operators.parse(OperatorToken.MULTIPLIER_1);
    expect(operator.method(25, 2)).equal(50);
  });

  it('Division', () => {
    const operator = Operators.parse(OperatorToken.DIVIDER_1);
    expect(operator.method(10, 5)).equal(2);
  });

  it('Percent', () => {
    const operator = Operators.parse(OperatorToken.PLUS);
    const percent = Operators.parse(OperatorToken.PERCENT);
    expect(percent.method(10, 5, operator)).equal(10.5);
  });

  it('Pow', () => {
    const operator = Operators.parse(OperatorToken.POW);
    expect(operator.method(2, 2)).equal(4);
  });

  it('Sqrt', () => {
    const operator = Operators.parse(OperatorToken.RADICAL) as Sqrt;
    expect(operator.method(4)).equal(2);
  });

  it('Operator functions', () => {
    const add = new Add();
    const subtract = new Subtract();
    const multiply = new Multiply();
    const operator = new Operator();
    expect(add.greaterThan(multiply)).equal(false);
    expect(add.greaterThanOrEqual(multiply)).equal(false);
    expect(add.equal(subtract)).equal(true);
    expect(multiply.greaterThan(add)).equal(true);
    expect(add.lessThan(multiply)).equal(true);
    expect(add.rightAssoc()).equal(false);
    expect(operator.method(1, 2)).equal(undefined);
  });
});
