import {Generator} from "./interfaces/generator";
import {ParseValidator} from "./parse-validator";
import * as fs from "fs";

export class EachFileGenerator implements Generator {

    generate(codes: string[], filename: string): void {
        let path = "_generated-files-US4/" + filename + "-result.txt"
        fs.writeFileSync(path, "")
        
        codes.forEach(code => {
            if (!ParseValidator.checkSum(code)) {
                fs.appendFileSync(path, code + " ERR\n")
                return
            }
            fs.appendFileSync(path, code + "\n")
        })
    }

}
