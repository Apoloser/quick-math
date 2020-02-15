import { Errors, OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';
import { ErrorMessage } from '../error-message';

export class Divide extends Operator {
  public assoc: OperatorAssoc = OperatorAssoc.LEFT;
  public precedence: number = 2;
  public token = OperatorToken.DIVIDER_1;

  public method(a: number, b: number): number {
    if (b === 0) {
      throw new ErrorMessage(Errors.DIVISION_BY_ZERO);
    }

    return a / b;
  }
}
