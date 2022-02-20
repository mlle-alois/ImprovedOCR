import {expect} from 'chai';
import {ParseValidator} from "../src/parse-validator";

const validCode = "457508000"
const illegalCode = "457?08000"
const notValidCode = "657608702"
const emptyCode = ""

describe('Parse Validator', () => {
    describe('CheckSum', () => {
        it('Should return true for valid code', () => {
            expect(ParseValidator.checkSum(validCode)).to.equals(true);
        });

        it('Should return false for not valid code', () => {
            expect(ParseValidator.checkSum(notValidCode)).to.equals(false);
        });
    })
    describe('Is Illegal Code', () => {
        it('Should return true for illegal code', () => {
            expect(ParseValidator.isIllegalCode(illegalCode)).to.equals(true);
        });

        it('Should return false for not illegal code', () => {
            expect(ParseValidator.isIllegalCode(validCode)).to.equals(false);
        });
    })
    describe('Is Empty Code', () => {
        it('Should return true for empty code', () => {
            expect(ParseValidator.isEmptyCode(emptyCode)).to.equals(true);
        });

        it('Should return false for not empty code', () => {
            expect(ParseValidator.isEmptyCode(validCode)).to.equals(false);
        });
    })
});
