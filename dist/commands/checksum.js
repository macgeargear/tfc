"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("../util");
exports.command = "checksum <filename>";
exports.desc = "checksum data of  <filename>";
const builder = (yargs) => yargs.positional("filename", { type: "string", demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { filename } = argv;
    const data = fs_1.default.readFileSync(filename, { encoding: "utf-8" });
    const checksumResult = (0, util_1.checksum)(data);
    process.stdout.write(`checksum of ${filename} is ${checksumResult}`);
    process.exit(0);
};
exports.handler = handler;
//# sourceMappingURL=checksum.js.map