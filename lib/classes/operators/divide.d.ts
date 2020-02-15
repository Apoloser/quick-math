import { OperatorAssoc, OperatorToken } from '../../const';
import { Operator } from './operator';
export declare class Divide extends Operator {
    assoc: OperatorAssoc;
    precedence: number;
    token: OperatorToken;
    method(a: number, b: number): number;
}
