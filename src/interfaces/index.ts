import { Operator } from '../classes/operators';

export type Expression = ExpressionItem[];
export type ExpressionItem = Operator | number;
