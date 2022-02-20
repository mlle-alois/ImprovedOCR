import {NumberStrings} from "./consts/number-strings";
import {Parser} from "./interfaces/parser";
import {Extractor} from "./interfaces/extractor";

const NUMBER_HEIGHT: number = 4
const ENTRY_WIDTH: number = 27
const NUMBER_WIDTH: number = 3
const EMPTY_STRING: string = ''
export const UNKNOWN_SYMBOL: string = '?'
const END_OF_LINE: string = '\r\n'

export class ParserFile implements Parser {

    private entries: string[] = [];
    private fileExtractor: Extractor;
    
    constructor(fileExtractor: Extractor) {
        this.fileExtractor = fileExtractor
    }

    public parse(filepath: string): string[] {
        let stringToParse = this.fileExtractor.getExtratedContent(filepath);
        
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

    private generateCode(startLine: number): string {
        let code = EMPTY_STRING;
        for (let columnIndex = 0; columnIndex < ENTRY_WIDTH; columnIndex += NUMBER_WIDTH) {
            code += ParserFile.matchFlattenNumber(this.extractFlattenNumber(columnIndex, startLine))
        }
        return code
    }

    private extractFlattenNumber(startColumn: number, startLine: number): string {
        let flattenNumber = EMPTY_STRING;

        for (let lineIndex = startLine; lineIndex < startLine + NUMBER_HEIGHT; lineIndex += 1) {
            for (let columnIndex = startColumn; columnIndex < startColumn + NUMBER_WIDTH; columnIndex += 1) {
                flattenNumber += this.entries[lineIndex].charAt(columnIndex)
            }
        }
        return flattenNumber
    }

    private static matchFlattenNumber(numberString: string): string {
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
