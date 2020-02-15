import { Errors } from '../const';
import { ErrorMessage } from './error-message';

export class Numbers {
  public static parse(data: string) {
    const number = Number(data);
    if (isNaN(number)) {
      throw new ErrorMessage(Errors.NUMBER_NOT_VALID, { number: data });
    }
    return number;
  }
}
