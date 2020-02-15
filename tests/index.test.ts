import { QuickMath } from '../src';
import { Add, Divide, Multiply, Operator, Operators, Percent, Pow, Subtract } from '../src/classes/operators';
import { expect } from 'chai';
import { Sqrt } from '../src/classes/operators/sqrt';
import { Errors, OperatorToken } from '../src/const';
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

describe('Calculation', () => {
	it('Addition', () => {
		const obj = new QuickMath('221+1+5+2');
		expect(obj.calculate()).equal(229);
	});

	it('Subtraction', () => {
		const obj = new QuickMath('35-5-1-5');
		expect(obj.calculate()).equal(24);
	});

	it('Multiply', () => {
		const obj = new QuickMath('5*10*2');
		expect(obj.calculate()).equal(100);
	});

	it('Division', () => {
		const obj = new QuickMath('25/5/2');
		expect(obj.calculate()).equal(2.5);
	});

	it('Parentheses', () => {
		const obj = new QuickMath('((5+2)-5)*(50-11)*5');
		expect(obj.calculate()).equal(390);
	});

	it('Percent', () => {
		const obj = new QuickMath('(10-5%)+(5*25%)');
		expect(obj.calculate()).equal(10.75);
	});

	it('Pow', () => {
		const obj = new QuickMath('2^2*5-2');
		expect(obj.calculate()).equal(18);
	});

	it('Radical', () => {
		const obj = new QuickMath('√(2+2)+5');
		expect(obj.calculate()).equal(7);
	});
});
