import * as readline from 'readline';
import {Interface} from 'readline';
import {SeparatedFileGenerator} from "../separated-file-generator";
import {GroupedFileGenerator} from "../grouped-file-generator";
import {Parser} from "../interfaces/parser";
import {Extractor} from "../interfaces/extractor";
import {CLIParsing} from "./cli-parsing";

export class CLISetUp {

    private readLine: Interface;
    private readonly parser: Parser;
    private readonly extractor: Extractor;

    constructor(parser: Parser, extractor: Extractor) {
        this.parser = parser
        this.extractor = extractor
        this.readLine = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public runCLI(): void {
        this.chooseMainInterface()
    }

    private chooseMainInterface(): void {
        this.readLine.question(
            'What kind of interface do you want to use ?\n' +
            '1- CLI\n', (choice) => {
                switch (choice.trim()) {
                    case '1':
                        return this.chooseMainGenerator()
                    default:
                        console.log('Please enter a number in the menu\n');
                        this.chooseMainInterface()
                }
                this.readLine.close();
            });
    }
    
    private chooseMainGenerator(): void {
        let cliGeneration: CLIParsing
        this.readLine.question(
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
                        this.chooseMainGenerator()
                }
                this.readLine.close();
            });
    }
}
