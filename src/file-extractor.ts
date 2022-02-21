import {Extractor} from "./interfaces/extractor";
import * as fs from "fs";

export class FileExtractor implements Extractor {
    getExtractedContent(filepath: string): string {
        return fs.readFileSync(filepath,'utf8')
    }

    doesDataExist(filepath: string): boolean {
        return fs.existsSync(filepath);
    }
}
