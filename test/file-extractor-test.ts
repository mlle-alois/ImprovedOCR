import {expect} from 'chai';
import {FileExtractor} from "../src/file-extractor";
import {EMPTY_PATH, ONE_ENTRY_PATH} from "./consts/paths-and-contents";

const singleEntry: string =
    '    _  _     _  _  _  _  _ \r\n' +
    '  | _| _||_||_ |_   ||_||_|\r\n' +
    '  ||_  _|  | _||_|  ||_| _|\r\n' +
    '                           \r\n'
describe('File Extractor', () => {
    describe('Get Extractor', () => {
        it('Should get the content of not empty file', () => {
            const fileExtractor: FileExtractor = new FileExtractor();
            expect(fileExtractor.getExtratedContent(ONE_ENTRY_PATH)).to.equal(singleEntry);
        });

        it('Should get the content of empty file', () => {
            const fileExtractor: FileExtractor = new FileExtractor();
            expect(fileExtractor.getExtratedContent(EMPTY_PATH)).to.equal("");
        });
    })
});
