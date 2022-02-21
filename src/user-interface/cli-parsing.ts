import {Generator} from "../interfaces/generator";
import {Extractor} from "../interfaces/extractor";
import {ReadLine} from "./read-line";

export class CLIParsing {

    private generator: Generator;
    private extractor: Extractor;
    private readonly repository = "_entries-files/"

    constructor(generator: Generator, extractor: Extractor) {
        this.generator = generator
        this.extractor = extractor
    }

    public runCLI(): void {
        this.chooseFileToParse()
    }

    private chooseFileToParse(): void {
        ReadLine.getInstance().question('Which "_entries-file" repository\'s file do you want to parse ? (don\' forget extension)\n',
            (filename) => {
                let filepath = this.repository + filename
                if (!this.extractor.doesDataExist(filepath)) {
                    console.log('Please fill in a file name present in the directory "_entries-file"\n');
                    return this.chooseFileToParse()
                } else {
                    this.generator.generate(filepath)
                    console.log('File was parsed, you can see the result in "_generated-files" repository\n')
                    return this.parseAnotherFile()
                }
            });
    }

    private parseAnotherFile(): void {
        ReadLine.getInstance().question('Do you want to parse another file ? [y/n] ', (answer) => {
            switch (answer.toLowerCase()) {
                case 'y':
                    return this.chooseFileToParse()
                case 'n':
                    console.log('Goodbye !');
                    break;
                default:
                    console.log('Invalid answer!');
                    this.parseAnotherFile()
            }
            ReadLine.getInstance().close();
        })
    }
}
