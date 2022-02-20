import {expect} from 'chai';
import {FileExtractor} from "../src/file-extractor";
import {
    EMPTY_PATH, EMPTY_CONTENT,
    MULTIPLE_ENTRIES_PATH, MULTIPLE_ENTRIES_CONTENT,
    ONE_ENTRY_PATH, ONE_ENTRY_CONTENT,
    ONE_FALSE_ENTRY_PATH, ONE_FALSE_ENTRY_CONTENT,
    TWO_ENTRIES_PATH, TWO_ENTRIES_CONTENT,
    TWO_ENTRIES_WITH_ONE_FALSE_PATH, TWO_ENTRIES_WITH_ONE_FALSE_CONTENT
} from "./consts/paths-and-contents";
import {ParserFile} from "../src/parser-file";

describe('Parser', () => {
    describe('Parse', () => {
        const fileExtractor: FileExtractor = new FileExtractor();
        const parser = new ParserFile(fileExtractor);
        it('Should get the code parsed from one-entry file', () => {
            expect(parser.parse(ONE_ENTRY_PATH)).to.eql(ONE_ENTRY_CONTENT);
        });

        it('Should get the code with errors parsed from one-false-entry file', () => {
            expect(parser.parse(ONE_FALSE_ENTRY_PATH)).to.eql(ONE_FALSE_ENTRY_CONTENT);
        });

        it('Should get the two codes parsed from two-entries file', () => {
            expect(parser.parse(TWO_ENTRIES_PATH)).to.eql(TWO_ENTRIES_CONTENT);
        });

        it('Should get the two codes parsed from two-entries-with-one-false file', () => {
            expect(parser.parse(TWO_ENTRIES_WITH_ONE_FALSE_PATH)).to.eql(TWO_ENTRIES_WITH_ONE_FALSE_CONTENT);
        });

        it('Should get the five codes parsed from five-entries file', () => {
            expect(parser.parse(MULTIPLE_ENTRIES_PATH)).to.eql(MULTIPLE_ENTRIES_CONTENT);
        });

        it('Should get empty code parsed from empty file', () => {
            expect(parser.parse(EMPTY_PATH)).to.eql(EMPTY_CONTENT);
        });
    });
});
