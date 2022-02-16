import {expect} from 'chai';
import {EntryFile} from "../src/entry-file";
import {EMPTY_PATH, ONE_ENTRY_PATH, ONE_FALSE_ENTRY_PATH} from "./paths";
import {Parser} from "../src/parser";

describe('Parser', () => {
    it('Should get the code parsed from one-entry file', () => {
        const entryFile: EntryFile = new EntryFile(ONE_ENTRY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new Parser();
        expect(parser.parse(stringToParse)).to.equal("123456789");
    });
    
    it('Should get the code with errors parsed from one-false-entry file', () => {
        const entryFile: EntryFile = new EntryFile(ONE_FALSE_ENTRY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new Parser();
        expect(parser.parse(stringToParse)).to.equal("123?5678?");
    });
    
    it('Should get empty code parsed from empty file', () => {
        const entryFile: EntryFile = new EntryFile(EMPTY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new Parser();
        expect(parser.parse(stringToParse)).to.equal("");
    });
});
