import {expect} from 'chai';
import {EachFileGenerator} from "../src/each-file-generator";
import {
    EMPTY_PATH,
    EMPTY_PATH_RESULT,
    MULTIPLE_ENTRIES_PATH,
    MULTIPLE_ENTRIES_PATH_RESULT,
    ONE_ENTRY_PATH,
    ONE_ENTRY_PATH_RESULT,
    ONE_FALSE_ENTRY_PATH,
    ONE_FALSE_ENTRY_PATH_RESULT,
    TWO_ENTRIES_PATH,
    TWO_ENTRIES_PATH_RESULT,
    TWO_ENTRIES_WITH_ONE_FALSE_PATH,
    TWO_ENTRIES_WITH_ONE_FALSE_PATH_RESULT
} from "./consts/paths-and-contents";
import {FileExtractor} from "../src/file-extractor";
import {ParserFile} from "../src/parser-file";

const emptyResult = ""
const oneEntryResult = "123456789\n"
const oneFalseEntryResult = "123?5678? ILL\n"
const twoEntriesResult =
    "123456789\n" +
    "123456709 ERR\n"
const twoFalseEntriesResult =
    "123456789\n" +
    "1234?6709 ILL\n"
const multipleEntriesResult =
    "123456789\n" +
    "123456709 ERR\n" +
    "1?34567?9 ILL\n" +
    "12?13678? ILL\n" +
    "356609701 ERR\n" +
    "457508000\n"
describe('Each File Generator', () => {
    describe('Generate', () => {
        const fileExtractor: FileExtractor = new FileExtractor();
        const parser = new ParserFile(fileExtractor);
        let filegen = new EachFileGenerator(parser)
        it('Should write multiple codes on file', () => {
            filegen.generate(MULTIPLE_ENTRIES_PATH)
            expect(fileExtractor.getExtratedContent(MULTIPLE_ENTRIES_PATH_RESULT)).to.equal(multipleEntriesResult);
        });
        it('Should write no codes on file', () => {
            filegen.generate(EMPTY_PATH)
            expect(fileExtractor.getExtratedContent(EMPTY_PATH_RESULT)).to.equal(emptyResult);
        });
        it('Should write one code on file', () => {
            filegen.generate(ONE_ENTRY_PATH)
            expect(fileExtractor.getExtratedContent(ONE_ENTRY_PATH_RESULT)).to.equal(oneEntryResult);
        });
        it('Should write one false code on file', () => {
            filegen.generate(ONE_FALSE_ENTRY_PATH)
            expect(fileExtractor.getExtratedContent(ONE_FALSE_ENTRY_PATH_RESULT)).to.equal(oneFalseEntryResult);
        });
        it('Should write two codes on file', () => {
            filegen.generate(TWO_ENTRIES_PATH)
            expect(fileExtractor.getExtratedContent(TWO_ENTRIES_PATH_RESULT)).to.equal(twoEntriesResult);
        });
        it('Should write two false codes on file', () => {
            filegen.generate(TWO_ENTRIES_WITH_ONE_FALSE_PATH)
            expect(fileExtractor.getExtratedContent(TWO_ENTRIES_WITH_ONE_FALSE_PATH_RESULT)).to.equal(twoFalseEntriesResult);
        });
    })
});
