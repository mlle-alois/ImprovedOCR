import {expect} from 'chai';
import {EntryFile} from "../src/entry-file";
import {EMPTY_PATH, ONE_ENTRY_PATH} from "./paths-and-contents";

const basicEntry: string =
    '    _  _     _  _  _  _  _\r\n' +
    '  | _| _||_||_ |_   ||_||_|\r\n' +
    '  ||_  _|  | _||_|  ||_| _|\r\n' +
    '                           \r\n'
describe('Get Entry', () => {
    it('Should get the content of not empty file', () => {
        const entryFile: EntryFile = new EntryFile(ONE_ENTRY_PATH);
        expect(entryFile.getEntry()).to.equal(basicEntry);
    });

    it('Should get the content of empty file', () => {
        const entryFile: EntryFile = new EntryFile(EMPTY_PATH);
        expect(entryFile.getEntry()).to.equal("");
    });
});
