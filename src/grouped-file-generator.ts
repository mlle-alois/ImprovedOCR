import {Generator} from "./interfaces/generator";
import {ParseValidator} from "./parse-validator";
import * as fs from "fs";
import {Parser} from "./interfaces/parser";
import {PathFactory} from "./path-factory";

export class GroupedFileGenerator implements Generator {

    private readonly repository = "_generated-files-US5"
    private readonly authorized = "authorized"
    private readonly errored = "errored"
    private readonly unknown = "unknown"

    private parser: Parser;

    constructor(parser: Parser) {
        this.parser = parser
    }

    public generate(filepath: string): void {
        let codes = this.parser.parse(filepath)

        this.appendCodesToFile(codes);
    }

    private appendCodesToFile(codes: string[]): void {
        codes.forEach(code => {
            if (ParseValidator.isEmptyCode(code))
                return
            if (ParseValidator.isIllegalCode(code)) {
                return this.appendCodeToFile(this.unknown, code)
            } else if (!ParseValidator.checkSum(code)) {
                return this.appendCodeToFile(this.errored, code)
            }
            return this.appendCodeToFile(this.authorized, code)
        })
    }

    private appendCodeToFile(filename: string, code: string): void {
        return fs.appendFileSync(PathFactory.generate(this.repository, filename), code + `\n`)
    }

}
