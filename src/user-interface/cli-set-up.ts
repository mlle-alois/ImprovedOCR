import {SeparatedFileGenerator} from "../separated-file-generator";
import {GroupedFileGenerator} from "../grouped-file-generator";
import {Parser} from "../interfaces/parser";
import {Extractor} from "../interfaces/extractor";
import {CLIParsing} from "./cli-parsing";
import {ReadLine} from "./read-line";

export class CLISetUp {
    
    private readonly parser: Parser;
    private readonly extractor: Extractor;

    constructor(parser: Parser, extractor: Extractor) {
        this.parser = parser
        this.extractor = extractor
    }

    public runCLI(): void {
        this.chooseMainGenerator()
    }
    
    private chooseMainGenerator(): void {
        let cliGeneration: CLIParsing
        ReadLine.getInstance().question(
            'What kind of generator do you want to use ?\n' +
            '1- Each File Generator\n' +
            '2- Grouped file Generator\n', (choice) => {
                switch (choice.trim()) {
                    case '1':
                        cliGeneration = new CLIParsing(new SeparatedFileGenerator(this.parser), this.extractor)
                        return cliGeneration.runCLI()
                    case '2':
                        cliGeneration = new CLIParsing(new GroupedFileGenerator(this.parser), this.extractor)
                        return cliGeneration.runCLI()
                    default:
                        console.log('Please enter a number in the menu\n');
                        return this.chooseMainGenerator()
                }
            });
    }
}
