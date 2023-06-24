"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("../util");
exports.command = "encrypt <filename>";
exports.desc = "encrypt <filename> by asymmetric encryption(Public-key cryptography)";
const builder = (yargs) => {
    return yargs.positional("filename", { type: "string", demandOption: true });
};
exports.builder = builder;
const handler = (argv) => {
    const { filename } = argv;
    const data = fs_1.default.readFileSync(filename, { encoding: "utf-8" });
    const result = `decrypted text: ${(0, util_1.encryptText)(data)}`;
    process.stdout.write(result);
    process.exit(0);
};
exports.handler = handler;
//# sourceMappingURL=asymm.js.map