import {expect} from 'chai';
import {ParseValidator} from "../src/parse-validator";
import {EachFileGenerator} from "../src/each-file-generator";
import {
    EMPTY_CONTENT,
    EMPTY_FILENAME,
    MULTIPLE_ENTRIES_CONTENT,
    MULTIPLE_ENTRIES_FILENAME,
    ONE_ENTRY_CONTENT,
    ONE_ENTRY_FILENAME,
    ONE_FALSE_ENTRY_CONTENT, ONE_FALSE_ENTRY_FILENAME,
    TWO_ENTRIES_CONTENT, TWO_ENTRIES_FILENAME,
    TWO_ENTRIES_WITH_ONE_FALSE_CONTENT, TWO_ENTRIES_WITH_ONE_FALSE_FILENAME
} from "./paths-and-contents";

//TODO
const validCode = "457508000"
describe('CheckSum', () => {
    it('Should return true for valid code', () => {
        let filegen = new EachFileGenerator()
        filegen.generate(MULTIPLE_ENTRIES_CONTENT, MULTIPLE_ENTRIES_FILENAME)
        filegen.generate(EMPTY_CONTENT, EMPTY_FILENAME)
        filegen.generate(ONE_ENTRY_CONTENT, ONE_ENTRY_FILENAME)
        filegen.generate(ONE_FALSE_ENTRY_CONTENT, ONE_FALSE_ENTRY_FILENAME)
        filegen.generate(TWO_ENTRIES_CONTENT, TWO_ENTRIES_FILENAME)
        filegen.generate(TWO_ENTRIES_WITH_ONE_FALSE_CONTENT, TWO_ENTRIES_WITH_ONE_FALSE_FILENAME)
        expect(ParseValidator.checkSum(validCode)).to.equals(true);
    });
});
