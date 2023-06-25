import fs from "fs";
import crypto, { BinaryToTextEncoding } from "crypto";

export function strToByte(text: string): Uint8Array {
  const arr = new Uint8Array(text.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = text.charCodeAt(i);
  }
  return arr;
}

export function byteToStr(byteArr: Uint8Array): string {
  return String.fromCharCode(...byteArr);
}

export function getDataFromFile(filename: string): string {
  return fs.readFileSync(filename, { encoding: "utf-8" });
}

export function checksum(
  data: string,
  algo?: string,
  encoding?: BinaryToTextEncoding
): string {
  return crypto
    .createHash(algo || "md5")
    .update("str", "utf8")
    .digest(encoding || "hex");
}

export function encryptTextRSA(plainText: string): Buffer {
  return crypto.publicEncrypt(
    {
      key: fs.readFileSync("public_key.pem", "utf-8"),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(plainText)
  );
}

export function decryptTextRSA(cipherText: Buffer): Buffer {
  return crypto.privateDecrypt(
    {
      key: fs.readFileSync("private_key.pem", "utf-8"),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    cipherText
  );
}

export function encryptTextAES(plainText: string) {}
