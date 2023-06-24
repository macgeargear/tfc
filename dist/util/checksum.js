"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checksum = void 0;
const crypto_1 = __importDefault(require("crypto"));
function checksum(data, algo, encoding) {
    return crypto_1.default
        .createHash(algo || "md5")
        .update("str", "utf8")
        .digest(encoding || "hex");
}
exports.checksum = checksum;
//# sourceMappingURL=checksum.js.map