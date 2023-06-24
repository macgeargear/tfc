"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
function checksum(data, algo, encoding) {
    return crypto_1.default
        .createHash(algo || "md5")
        .update("str", "utf8")
        .digest(encoding || "hex");
}
function main() {
    const filename = process.argv[2];
    const data = fs_1.default.readFileSync(filename, { encoding: "utf-8" });
    console.log(`the check sum of ${filename} is ${checksum(data)}`);
}
main();
//# sourceMappingURL=index.js.map