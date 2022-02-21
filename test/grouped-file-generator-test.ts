import {expect} from 'chai';
import {
    AUTHORIZED_PATH_RESULT,
    EMPTY_PATH,
    ERRORED_PATH_RESULT,
    MULTIPLE_ENTRIES_PATH,
    ONE_ENTRY_PATH,
    ONE_FALSE_ENTRY_PATH,
    TWO_ENTRIES_PATH,
    TWO_ENTRIES_WITH_ONE_FALSE_PATH,
    UNKNOWN_PATH_RESULT
} from "./consts/paths-and-contents";
import {FileExtractor} from "../src/file-extractor";
import {ParserFile} from "../src/parser-file";
import {GroupedFileGenerator} from "../src/grouped-file-generator";

const emptyCode = ""
const oneEntryAuthorizedCodes = "123456789\n"
const oneEntryUnknownCodes = ""
const oneEntryErroredCodes = ""
const oneFalseEntryAuthorizedCodes = ""
const oneFalseEntryUnknownCodes = "123?5678?\n"
const oneFalseEntryErroredCodes = ""
const twoEntriesAuthorizedCodes = "123456789\n"
const twoEntriesUnknownCodes = ""
const twoEntriesErroredCodes = "123456709\n"
const twoFalseEntriesAuthorizedCodes = "123456789\n"
const twoFalseEntriesUnknownCodes = "1234?6709\n"
const twoFalseEntriesErroredCodes = ""
const multipleEntriesAuthorizedCodes =
    "123456789\n" +
    "457508000\n"
const multipleEntriesUnknownCodes =
    "1?34567?9\n" +
    "12?13678?\n"
const multipleEntriesErroredCodes =
    "123456709\n" +
    "356609701\n"

describe('Grouped File Generator', () => {
    describe('Generate', () => {
        const fileExtractor: FileExtractor = new FileExtractor();
        const parser = new ParserFile(fileExtractor);
        let filegen = new GroupedFileGenerator(parser);
        let extractedAuthorizedContent: string;
        let extractedErroredContent: string;
        let extractedUnknownContent: string;
        let extractedAuthorizedContentAfterTreatment: string;
        let extractedErroredContentAfterTreatment: string;
        let extractedUnknownContentAfterTreatment: string;
        beforeEach(() => {
            extractedAuthorizedContent = fileExtractor.getExtractedContent(AUTHORIZED_PATH_RESULT);
            extractedErroredContent = fileExtractor.getExtractedContent(ERRORED_PATH_RESULT);
            extractedUnknownContent = fileExtractor.getExtractedContent(UNKNOWN_PATH_RESULT);
        });
        
        function initAfterTreatment(): void {
            extractedAuthorizedContentAfterTreatment = fileExtractor.getExtractedContent(AUTHORIZED_PATH_RESULT);
            extractedErroredContentAfterTreatment = fileExtractor.getExtractedContent(ERRORED_PATH_RESULT);
            extractedUnknownContentAfterTreatment = fileExtractor.getExtractedContent(UNKNOWN_PATH_RESULT);
        }
        
        it('Should write multiple codes on files', () => {
            filegen.generate(MULTIPLE_ENTRIES_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + multipleEntriesAuthorizedCodes);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + multipleEntriesErroredCodes);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + multipleEntriesUnknownCodes);
        });
        it('Should write no codes on files', () => {
            filegen.generate(EMPTY_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + emptyCode);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + emptyCode);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + emptyCode);
        });
        it('Should write one code on files', () => {
            filegen.generate(ONE_ENTRY_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + oneEntryAuthorizedCodes);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + oneEntryErroredCodes);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + oneEntryUnknownCodes);
        });
        it('Should write one false code on files', () => {
            filegen.generate(ONE_FALSE_ENTRY_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + oneFalseEntryAuthorizedCodes);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + oneFalseEntryErroredCodes);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + oneFalseEntryUnknownCodes);
        });
        it('Should write two codes on files', () => {
            filegen.generate(TWO_ENTRIES_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + twoEntriesAuthorizedCodes);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + twoEntriesErroredCodes);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + twoEntriesUnknownCodes);
        });
        it('Should write two false codes on files', () => {
            filegen.generate(TWO_ENTRIES_WITH_ONE_FALSE_PATH)
            initAfterTreatment()
            expect(extractedAuthorizedContentAfterTreatment).to.equal(extractedAuthorizedContent + twoFalseEntriesAuthorizedCodes);
            expect(extractedErroredContentAfterTreatment).to.equal(extractedErroredContent + twoFalseEntriesErroredCodes);
            expect(extractedUnknownContentAfterTreatment).to.equal(extractedUnknownContent + twoFalseEntriesUnknownCodes);
        });
    })
});
