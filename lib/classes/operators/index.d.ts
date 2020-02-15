import { OperatorToken } from '../../const';
import { Add } from './add';
import { Subtract } from './subtract';
import { Divide } from './divide';
import { Multiply } from './multiply';
import { Percent } from './percent';
import { Pow } from './pow';
import { Operator } from './operator';
export { Add, Subtract, Divide, Multiply, Operator, Pow, Percent };
export declare class Operators {
    private static list;
    static parse(data: OperatorToken): Operator;
}
