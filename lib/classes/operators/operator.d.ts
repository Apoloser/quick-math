import { OperatorAssoc, OperatorToken } from '../../const';
export declare class Operator {
    precedence: number;
    assoc: OperatorAssoc;
    token: OperatorToken;
    paramsCount: number;
    method(a: number, b: number, operator?: Operator): void;
    greaterThan(operator: Operator): boolean;
    greaterThanOrEqual(operator: Operator): boolean;
    equal(operator: Operator): boolean;
    lessThan(operator: Operator): boolean;
    lessThanOrEqual(operator: Operator): boolean;
    leftAssoc(): boolean;
    rightAssoc(): boolean;
}
