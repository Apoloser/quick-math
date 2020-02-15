import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';
export declare class Sqrt extends Operator {
    assoc: OperatorAssoc;
    precedence: number;
    token: OperatorToken;
    paramsCount: number;
    method(a: number): number;
}
