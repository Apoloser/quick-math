import { Errors } from '../const';
interface ReplaceMessage {
    [key: string]: string;
}
export declare class ErrorMessage extends Error {
    constructor(message: Errors | string, replaceOptions?: ReplaceMessage);
    static replace(message: Errors | string, replaceOptions: ReplaceMessage): string;
}
export {};
