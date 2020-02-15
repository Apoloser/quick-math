import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';

export class Pow extends Operator {
  public assoc: OperatorAssoc = OperatorAssoc.RIGHT;
  public precedence: number = 3;
  public token = OperatorToken.POW;

  public method(a: number, b: number): number {
    return Math.pow(a, b);
  }
}
