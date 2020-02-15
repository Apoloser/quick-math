import { Operator } from '../classes';

export type Expression = ExpressionItem[];
export type ExpressionItem = Operator | number;
