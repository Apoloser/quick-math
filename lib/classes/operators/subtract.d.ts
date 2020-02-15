import { Operator } from './operator';
import { OperatorAssoc, OperatorToken } from '../../const';
export declare class Subtract extends Operator {
    assoc: OperatorAssoc;
    precedence: number;
    token: OperatorToken;
    method(a: number, b: number): number;
}
