import { Expression } from '../interfaces';
import { Operator } from './operators';
export declare class QuickMath {
    private _rpn;
    get rpn(): string;
    set expression(data: string);
    constructor(data?: string);
    calculate(): number | void | Operator;
    static calculate(data: string): number | void | Operator;
    static resolve(rpn: Expression): number | void | Operator;
}
