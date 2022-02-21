import {expect} from 'chai';
import {FileExtractor} from "../src/file-extractor";
import {EMPTY_PATH, ONE_ENTRY_PATH} from "./consts/paths-and-contents";

const singleEntry: string =
    '    _  _     _  _  _  _  _ \r\n' +
    '  | _| _||_||_ |_   ||_||_|\r\n' +
    '  ||_  _|  | _||_|  ||_| _|\r\n' +
    '                           \r\n'
describe('File Extractor', () => {
    const fileExtractor: FileExtractor = new FileExtractor();
    describe('Get Extractor', () => {
        it('Should get the content of not empty file', () => {
            expect(fileExtractor.getExtractedContent(ONE_ENTRY_PATH)).to.equal(singleEntry);
        });

        it('Should get the content of empty file', () => {
            expect(fileExtractor.getExtractedContent(EMPTY_PATH)).to.equal("");
        });
    })
    describe('Does data exist', () => {
        it('Should return true for existing file', () => {
            expect(fileExtractor.doesDataExist(ONE_ENTRY_PATH)).to.equal(true);
        });

        it('Should return false for not existing file', () => {
            expect(fileExtractor.doesDataExist("fake path")).to.equal(false);
        });
    })
});
