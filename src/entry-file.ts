import {Entry} from "./interfaces/entry";
import * as fs from "fs";

export class EntryFile implements Entry {
    private readonly filePath: string

    constructor(filePath: string) {
        this.filePath = filePath
    }

    getEntry(): string {
        return fs.readFileSync(this.filePath,'utf8')
    }
}
