export class ParseValidator {
    public static checkSum(code: string): boolean {
        return code.split('').map(value => {
            return +value
        }).reverse().reduce(
            (previousValue, currentValue, index) =>
                previousValue + currentValue * (index + 1), 0) % 11 == 0
    }
}
