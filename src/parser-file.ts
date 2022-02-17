import {NumberStrings} from "./number-strings";
import {Parser} from "./interfaces/parser";

const NUMBER_HEIGHT: number = 4
const ENTRY_WIDTH: number = 27
const NUMBER_WIDTH: number = 3
const EMPTY_STRING: string = ''
const UNKNOWN_SYMBOL: string = '?'
const END_OF_LINE: string = '\r\n'

export class ParserFile implements Parser {

    private entries: string[] = [];

    public parse(stringToParse: string): string[] {
        if (stringToParse.trim() == EMPTY_STRING) {
            return [EMPTY_STRING]
        }

        this.entries = stringToParse.split(END_OF_LINE)

        return this.generateCodes()
    }

    private generateCodes(): string[] {
        let codes = [];
        for (let lineIndex = 0; lineIndex < this.entries.length - 1; lineIndex += NUMBER_HEIGHT) {
            codes.push(this.generateCode(lineIndex))
        }
        return codes
    }

    private generateCode(startHeight: number): string {
        let code = EMPTY_STRING;
        for (let positionInEntryLine = 0; positionInEntryLine < ENTRY_WIDTH; positionInEntryLine += NUMBER_WIDTH) {
            code += ParserFile.matchNumber(this.extractNumber(positionInEntryLine, startHeight))
        }
        return code
    }

    private extractNumber(startWidth: number, startHeight: number): string {
        let numberString = EMPTY_STRING;

        for (let lineIndex = startHeight; lineIndex < startHeight + NUMBER_HEIGHT; lineIndex += 1) {
            for (let position = startWidth; position < startWidth + NUMBER_WIDTH; position += 1) {
                numberString += this.entries[lineIndex].charAt(position)
            }
        }
        return numberString
    }

    private static matchNumber(numberString: string): string {
        switch (numberString) {
            case NumberStrings.NUMBER_ZERO:
                return "0"
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
