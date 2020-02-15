import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';
import { Subtract } from './subtract';
import { Add } from './add';

export class Percent extends Operator {
	public assoc: OperatorAssoc = OperatorAssoc.LEFT;
	public precedence: number = 3;
	public token = OperatorToken.PERCENT;
	public paramsCount: number = 3;

	public method(a: number, b: number, operator: Operator) {
		if (operator instanceof Subtract || operator instanceof Add) {
			b = b / 100 * a;
		} else {
			b = b / 100;
		}
		return operator.method.apply(this, [ a, b ]);
	}
}
