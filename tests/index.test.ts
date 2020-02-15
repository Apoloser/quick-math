import { QuickMath } from '../src';
import { Divide, Operators } from '../src/classes/operators';
import { expect } from 'chai';
import { Errors } from '../src/const';
import { Numbers } from '../src/classes/number';
import { Parser } from '../src/classes/parser';
import { ErrorMessage } from '../src/classes/error-message';

describe('Base tests', () => {
  const data = '25* 30-1-2 5/50-25-25';
  const rpn = '2530*1-2550/-25-25-';

  it('Create', () => {
    const obj = new QuickMath(data);
    expect(obj.rpn).to.eql(rpn);
  });

  it('Set expression', () => {
    const obj = new QuickMath();
    obj.expression = data;
    expect(obj.rpn).to.eql(rpn);
  });

  it('Static method', () => {
    const obj = new QuickMath(data);
    expect(QuickMath.calculate(data)).to.eql(obj.calculate());
  });

  it('Number parse', () => {
    expect(Numbers.parse('25')).to.eql(25);
  });

  it('Exceptions tests', () => {
    const obj = new QuickMath('%5-5');
    const divide = new Divide();
    const unsupportedOperator = 'z' as any;
    expect(() => Numbers.parse('a')).to.throw(ErrorMessage.replace(Errors.NUMBER_NOT_VALID, { number: 'a' }));
    expect(() => obj.calculate()).to.throw(Errors.PERCENT_CANT_BE_FIRST);
    expect(() => Parser.stringToRPN('(((()')).to.throw(Errors.TOO_MANY_OPEN_PARENTHESES);
    expect(() => Parser.stringToRPN('()))))')).to.throw(Errors.TOO_MANY_CLOSE_PARENTHESES);
    expect(() => divide.method(1, 0)).to.throw(Errors.DIVISION_BY_ZERO);
    expect(() => Operators.parse(unsupportedOperator)).to.throw(ErrorMessage.replace(Errors.OPERATOR_NOT_SUPPORTED, { operator: unsupportedOperator }));
  });
});
