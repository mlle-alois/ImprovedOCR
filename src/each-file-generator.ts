import {Generator} from "./interfaces/generator";
import {ParseValidator} from "./parse-validator";
import * as fs from "fs";
import {ERROR_SUFFIX, ILLEGAL_SUFFIX} from "./consts/suffixes";
import {Parser} from "./interfaces/parser";
import {PathFactory} from "./path-factory";

export class EachFileGenerator implements Generator {

    private readonly repository = "_generated-files-US4"

    private parser: Parser;

    constructor(parser: Parser) {
        this.parser = parser
    }

    public generate(filepath: string): void {
        let filename = EachFileGenerator.extractFileName(filepath)

        let path = PathFactory.generate(this.repository, filename)

        let codes = this.parser.parse(filepath)

        EachFileGenerator.overwriteOldContent(path)

        this.appendCodesToFile(codes, path);
    }

    private appendCodesToFile(codes: string[], path: string): void {
        codes.forEach(code => {
            if (ParseValidator.isEmptyCode(code))
                return
            let suffix = ""
            if (ParseValidator.isIllegalCode(code)) {
                suffix = ILLEGAL_SUFFIX
            } else if (!ParseValidator.checkSum(code)) {
                suffix = ERROR_SUFFIX
            }
            fs.appendFileSync(path, code + `${suffix}\n`)
        })
    }

    private static overwriteOldContent(path: string): void {
        fs.writeFileSync(path, "")
    }
    
    private static extractFileName(filepath: string): string {
        let splited = filepath.split("/")
        return splited[splited.length - 1].split(".")[0]
    }

}
