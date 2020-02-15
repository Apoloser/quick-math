import { Expression } from '../interfaces';
export declare class QuickMath {
    private _rpn;
    get rpn(): string;
    set expression(data: string);
    constructor(data?: string);
    static calculate(data: string): number;
    static resolve(rpn: Expression): number;
    calculate(): number;
}
