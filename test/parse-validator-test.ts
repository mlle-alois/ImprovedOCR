import {expect} from 'chai';
import {ParseValidator} from "../src/parse-validator";

const validCode = "457508000"
const notValidCode = "657608702"
describe('CheckSum', () => {
    it('Should return true for valid code', () => {
        expect(ParseValidator.checkSum(validCode)).to.equals(true);
    });
    it('Should return false for not valid code', () => {
        expect(ParseValidator.checkSum(notValidCode)).to.equals(false);
    });
});
