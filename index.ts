import {CLISetUp} from "./src/user-interface/cli-set-up";
import {extractor, parser} from "./app-config";

let setUp = new CLISetUp(parser, extractor)

setUp.runCLI()
