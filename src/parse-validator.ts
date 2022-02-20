import {UNKNOWN_SYMBOL} from "./parser-file";

export class ParseValidator {
    public static checkSum(code: string): boolean {
        return code.split('').map(value => {
            return +value
        }).reverse().reduce(
            (previousValue, currentValue, index) =>
                previousValue + currentValue * (index + 1), 0) % 11 == 0
    }

    public static isIllegalCode(code: string): boolean {
        return code.indexOf(UNKNOWN_SYMBOL) != -1
    }
    
    public static isEmptyCode(code: string): boolean {
        return code == ""
    }
}
