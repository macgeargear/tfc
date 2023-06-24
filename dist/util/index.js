"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptText = exports.encryptText = exports.checksum = exports.getDataFromFile = exports.byteToStr = exports.strToByte = void 0;
const fs_1 = __importDefault(require("fs"));
const crypto_1 = __importDefault(require("crypto"));
function strToByte(text) {
    const arr = new Uint8Array(text.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = text.charCodeAt(i);
    }
    return arr;
}
exports.strToByte = strToByte;
function byteToStr(byteArr) {
    return String.fromCharCode(...byteArr);
}
exports.byteToStr = byteToStr;
function getDataFromFile(filename) {
    return fs_1.default.readFileSync(filename, { encoding: "utf-8" });
}
exports.getDataFromFile = getDataFromFile;
function checksum(data, algo, encoding) {
    return crypto_1.default
        .createHash(algo || "md5")
        .update("str", "utf8")
        .digest(encoding || "hex");
}
exports.checksum = checksum;
function encryptText(plainText) {
    return crypto_1.default.publicEncrypt({
        key: fs_1.default.readFileSync("public_key.pem", "utf-8"),
        padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, Buffer.from(plainText));
}
exports.encryptText = encryptText;
function decryptText(cipherText) {
    return crypto_1.default.privateDecrypt({
        key: fs_1.default.readFileSync("private_key.pem", "utf-8"),
        padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, cipherText);
}
exports.decryptText = decryptText;
//# sourceMappingURL=index.js.map