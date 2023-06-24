import { strToByte, getDataFromFile, byteToStr } from "./util";

function encrypt(plainText: string, key: number): Uint8Array {
  return strToByte(plainText).map((e: number, i: number) => (e *= key + i));
}

function decrypt(cipherText: string, key: number): Uint8Array {
  return strToByte(cipherText).map((e: number, i: number) => (e /= key * i));
}

function main() {
  // symmetric
  const key = 31;
  const data = getDataFromFile(process.argv[2]);

  const cipherTextBytes = encrypt(data, key);
  const cipherText = byteToStr(cipherTextBytes);

  const decipherTextBytes = decrypt(cipherText, key);
  const decipherText = byteToStr(decipherTextBytes);

  console.log("plainText: ", data);
  console.log("cipherText: ", cipherText);
  console.log("decipherText: ", decipherText);
}

main();
