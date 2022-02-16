import {NumberStrings} from "./number-strings";

const NUMBER_HEIGHT: number = 4
const ENTRY_WIDTH: number = 27
const NUMBER_WIDTH: number = 3
const EMPTY_STRING: string = ''
const UNKNOWN_SYMBOL: string = '?'
const END_OF_LINE: string = '\r\n'

export class Parser {

    private singleEntry: string[] = [];

    public parse(stringToParse: string): string {
        if (stringToParse.trim() == EMPTY_STRING) {
            return EMPTY_STRING
        }

        this.singleEntry = stringToParse.split(END_OF_LINE)

        return this.generateCode()
    }

    private generateCode(): string {
        let code = EMPTY_STRING;
        for (let positionInEntryLine = 0; positionInEntryLine < ENTRY_WIDTH; positionInEntryLine += NUMBER_WIDTH) {
            code += Parser.matchNumber(this.extractNumber(positionInEntryLine, positionInEntryLine + NUMBER_WIDTH))
        }
        return code
    }

    private extractNumber(start: number, end: number): string {
        let numberString = EMPTY_STRING;

        for (let positionInEntryHeight = 0; positionInEntryHeight < NUMBER_HEIGHT; positionInEntryHeight += 1) {
            for (let position = start; position < end; position += 1) {
                numberString += this.singleEntry[positionInEntryHeight].charAt(position)
            }
        }
        return numberString
    }

    private static matchNumber(numberString: string): string {
        switch (numberString) {
            case NumberStrings.NUMBER_ONE:
                return "1"
            case NumberStrings.NUMBER_TWO:
                return "2"
            case NumberStrings.NUMBER_THREE:
                return "3"
            case NumberStrings.NUMBER_FOUR:
                return "4"
            case NumberStrings.NUMBER_FIVE:
                return "5"
            case NumberStrings.NUMBER_SIX:
                return "6"
            case NumberStrings.NUMBER_SEVEN:
                return "7"
            case NumberStrings.NUMBER_EIGHT:
                return "8"
            case NumberStrings.NUMBER_NINE:
                return "9"
            default:
                return UNKNOWN_SYMBOL
        }
    }

}
