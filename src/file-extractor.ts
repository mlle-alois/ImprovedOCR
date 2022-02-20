import {Extractor} from "./interfaces/extractor";
import * as fs from "fs";

export class FileExtractor implements Extractor {
    getExtratedContent(filepath: string): string {
        return fs.readFileSync(filepath,'utf8')
    }
}
