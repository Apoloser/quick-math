import { Operator, Operators } from './operators';
import { Errors, OperatorToken } from '../const';
import { Enum } from './enum';
import { ErrorMessage } from './error-message';
import { Numbers } from './number';

export class Parser {
  public static stringToRPN(str: string) {
    const output: Array<Operator | string> = [];
    let stack: Array<Operator | string> = [];
    let lastToken;
    let parenthesesBalance = 0;

    for (let token of str) {
      if (!token.trim()) {
        continue;
      }
      if (Parser.isOpenParentheses(token)) {
        stack.push(token as OperatorToken);
        parenthesesBalance++;
      } else if (Parser.isCloseParentheses(token)) {
        let operator;
        while ((operator = stack.pop()) && !this.isOpenParentheses(operator)) {
          output.push(operator);
        }
        parenthesesBalance--;
      } else if (Parser.isOperator(token)) {
        while (stack.length) {
          const operator = Operators.parse(token as OperatorToken);
          const stackOperator = stack[ stack.length - 1 ] as Operator;
          if ((operator.leftAssoc() && operator.lessThanOrEqual(stackOperator)) || operator.lessThan(stackOperator)) {
            output.push(stack.pop() as Operator);
          } else {
            break;
          }
        }
        stack.push(Operators.parse(token as OperatorToken));
      } else {
        if (!lastToken || Parser.isOpenParentheses(lastToken) || Parser.isOperator(lastToken)) {
          output.push(token);
        } else {
          output[ output.length - 1 ] += token;
        }
      }
      lastToken = token;
    }

    while (stack.length) {
      let token = stack.pop();
      output.push(token as string);
    }

    if (parenthesesBalance > 0) {
      throw new ErrorMessage(Errors.TOO_MANY_OPEN_PARENTHESES);
    }

    if (parenthesesBalance < 0) {
      throw new ErrorMessage(Errors.TOO_MANY_CLOSE_PARENTHESES);
    }

    return Parser.transformStringElementsToNumber(output);
  }

  private static transformStringElementsToNumber(rpn: Array<string | Operator>) {
    return rpn.map((item) => {
      let newItem;
      if (item instanceof Operator) {
        newItem = item;
      } else {
        newItem = Numbers.parse(item);
      }
      return newItem;
    });
  }

  private static isOpenParentheses(token: string | Operator) {
    return token === OperatorToken.P_OPEN;
  }

  private static isCloseParentheses(token: string | Operator) {
    return token === OperatorToken.P_CLOSE;
  }

  private static isOperator(token: string) {
    return Enum.getValues(OperatorToken).includes(token);
  }
}
