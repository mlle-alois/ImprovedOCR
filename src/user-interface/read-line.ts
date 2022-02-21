import {Interface} from "readline";
import readline from "readline";

export class ReadLine {
    private static _readline: Interface;

    private constructor() {}

    public static getInstance(): Interface {
        return this._readline || (this._readline = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        }));
    }
}
