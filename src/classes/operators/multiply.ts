import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';

export class Multiply extends Operator {
	public assoc: OperatorAssoc = OperatorAssoc.LEFT;
	public precedence: number = 2;
	public token = OperatorToken.MULTIPLIER_1;

	public method(a: number, b: number): number {
		return a * b;
	}
}
