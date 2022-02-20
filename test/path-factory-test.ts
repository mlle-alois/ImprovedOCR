import {expect} from 'chai';
import {PathFactory} from "../src/path-factory";

const repository = "repository"
const filename = "filename"
const generatedResult = `${repository}/${filename}-result.txt`

describe('Path Factory', () => {
    describe('Generate', () => {
        it('Should get the generated path with repository and file name', () => {
            expect(PathFactory.generate(repository, filename)).to.eql(generatedResult);
        });
    })
});
