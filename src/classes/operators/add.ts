import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';

export class Add extends Operator {
	public assoc: OperatorAssoc = OperatorAssoc.LEFT;
	public precedence: number = 1;
	public token = OperatorToken.PLUS;

	public method(a: number, b: number): number {
		return a + b;
	}
}
