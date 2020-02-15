import { Expression } from '../interfaces';
import { Errors } from '../const';
import { Operator, Percent } from './operators';
import { Parser } from './parser';
import { ErrorMessage } from './error-message';

export class QuickMath {
  public constructor(data?: string) {
    if (data) {
      this.expression = data;
    }
  }

  private _rpn: Expression = [];

  public get rpn(): string {
    return this._rpn.map(i => i instanceof Operator && i.token || i).join('');
  }

  public set expression(data: string) {
    this._rpn = Parser.stringToRPN(data);
  }

  public static calculate(data: string): number {
    return QuickMath.resolve(Parser.stringToRPN(data));
  }

  public static resolve(rpn: Expression): number {
    let stack = [];
    let percent;

    for (let item of rpn) {
      if (item instanceof Percent) {
        percent = item;
        continue;
      }
      if (item instanceof Operator) {
        let operator = item;
        if (percent) {
          stack.push(item);
          operator = percent;
          percent = null;
        }
        stack.push(operator.method.apply(this, stack.splice(-(operator.paramsCount)) as [ number, number, Operator ]));
      } else {
        if (percent) {
          throw new ErrorMessage(Errors.PERCENT_CANT_BE_FIRST);
        }
        stack.push(item);
      }
    }

    return stack[ 0 ] as number;
  }

  public calculate() {
    return QuickMath.resolve(this._rpn);
  }
}
