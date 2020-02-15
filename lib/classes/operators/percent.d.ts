import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';
export declare class Percent extends Operator {
    assoc: OperatorAssoc;
    precedence: number;
    token: OperatorToken;
    paramsCount: number;
    method(a: number, b: number, operator: Operator): void;
}
