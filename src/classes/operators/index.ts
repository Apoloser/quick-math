import { Errors, OperatorToken } from '../../const';
import { Add } from './add';
import { Subtract } from './subtract';
import { Divide } from './divide';
import { Multiply } from './multiply';
import { Percent } from './percent';
import { Pow } from './pow';
import { Operator } from './operator';
import { Sqrt } from './sqrt';
import { ErrorMessage } from '../error-message';

export { Add, Subtract, Divide, Multiply, Operator, Pow, Percent };

export class Operators {
	private static list: Map<OperatorToken, typeof Operator> = new Map()
		.set(OperatorToken.PLUS, Add)
		.set(OperatorToken.MINUS_1, Subtract)
		.set(OperatorToken.MINUS_2, Subtract)
		.set(OperatorToken.DIVIDER_1, Divide)
		.set(OperatorToken.DIVIDER_2, Divide)
		.set(OperatorToken.MULTIPLIER_1, Multiply)
		.set(OperatorToken.MULTIPLIER_2, Multiply)
		.set(OperatorToken.MULTIPLIER_3, Multiply)
		.set(OperatorToken.MULTIPLIER_4, Multiply)
		.set(OperatorToken.PERCENT, Percent)
		.set(OperatorToken.POW, Pow)
		.set(OperatorToken.RADICAL, Sqrt);

	public static parse(data: OperatorToken): Operator {
		const operator = Operators.list.get(data);
		if (!operator) {
			throw new ErrorMessage(Errors.OPERATOR_NOT_SUPPORTED, { operator: data });
		}
		return new operator();
	}
}
