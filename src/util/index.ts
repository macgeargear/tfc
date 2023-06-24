import fs from "fs";

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
