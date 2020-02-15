import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';

export class Sqrt extends Operator {
	public assoc: OperatorAssoc = OperatorAssoc.RIGHT;
	public precedence: number = 3;
	public token = OperatorToken.RADICAL;
	public paramsCount: number = 1;

	public method(a: number): number {
		return Math.sqrt(a);
	}
}
