import { Operator } from './operator';
import { OperatorAssoc, OperatorToken } from '../../const';

export class Subtract extends Operator {
	public assoc: OperatorAssoc = OperatorAssoc.LEFT;
	public precedence: number = 1;
	public token = OperatorToken.MINUS_1;

	public method(a: number, b: number): number {
		return a - b;
	}
}
