"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
function encrypt(plainText, key) {
    return (0, util_1.strToByte)(plainText).map((e, i) => (e *= key + i));
}
function decrypt(cipherText, key) {
    return (0, util_1.strToByte)(cipherText).map((e, i) => (e /= key * i));
}
function main() {
    // symmetric
    const key = 31;
    const data = (0, util_1.getDataFromFile)(process.argv[2]);
    const cipherTextBytes = encrypt(data, key);
    const cipherText = (0, util_1.byteToStr)(cipherTextBytes);
    const decipherTextBytes = decrypt(cipherText, key);
    const decipherText = (0, util_1.byteToStr)(decipherTextBytes);
    console.log("plainText: ", data);
    console.log("cipherText: ", cipherText);
    console.log("decipherText: ", decipherText);
}
main();
//# sourceMappingURL=mulKeyPlusIndex.js.map