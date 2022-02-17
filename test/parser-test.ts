import {expect} from 'chai';
import {EntryFile} from "../src/entry-file";
import {
    EMPTY_PATH, EMPTY_CONTENT,
    MULTIPLE_ENTRIES_PATH, MULTIPLE_ENTRIES_CONTENT,
    ONE_ENTRY_PATH, ONE_ENTRY_CONTENT,
    ONE_FALSE_ENTRY_PATH, ONE_FALSE_ENTRY_CONTENT,
    TWO_ENTRIES_PATH, TWO_ENTRIES_CONTENT,
    TWO_ENTRIES_WITH_ONE_FALSE_PATH, TWO_ENTRIES_WITH_ONE_FALSE_CONTENT
} from "./paths-and-contents";
import {ParserFile} from "../src/parser-file";

describe('Parser', () => {
    it('Should get the code parsed from one-entry file', () => {
        const entryFile: EntryFile = new EntryFile(ONE_ENTRY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(ONE_ENTRY_CONTENT);
    });

    it('Should get the code with errors parsed from one-false-entry file', () => {
        const entryFile: EntryFile = new EntryFile(ONE_FALSE_ENTRY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(ONE_FALSE_ENTRY_CONTENT);
    });

    it('Should get the two codes parsed from two-entries file', () => {
        const entryFile: EntryFile = new EntryFile(TWO_ENTRIES_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(TWO_ENTRIES_CONTENT);
    });

    it('Should get the two codes parsed from two-entries-with-one-false file', () => {
        const entryFile: EntryFile = new EntryFile(TWO_ENTRIES_WITH_ONE_FALSE_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(TWO_ENTRIES_WITH_ONE_FALSE_CONTENT);
    });

    it('Should get the five codes parsed from five-entries file', () => {
        const entryFile: EntryFile = new EntryFile(MULTIPLE_ENTRIES_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(MULTIPLE_ENTRIES_CONTENT);
    });

    it('Should get empty code parsed from empty file', () => {
        const entryFile: EntryFile = new EntryFile(EMPTY_PATH);
        const stringToParse = entryFile.getEntry();
        const parser = new ParserFile();
        expect(parser.parse(stringToParse)).to.eql(EMPTY_CONTENT);
    });
});
