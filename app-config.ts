import {FileExtractor} from "./src/file-extractor";
import {ParserFile} from "./src/parser-file";

export const extractor = new FileExtractor()
export const parser = new ParserFile(extractor)
