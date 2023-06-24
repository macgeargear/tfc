import crypto, { BinaryToTextEncoding } from "crypto";
import fs from "fs";

function checksum(
  data: string,
  algo?: string,
  encoding?: BinaryToTextEncoding
) {
  return crypto
    .createHash(algo || "md5")
    .update("str", "utf8")
    .digest(encoding || "hex");
}

function main() {
  const filename = process.argv[2];
  const data = fs.readFileSync(filename, { encoding: "utf-8" });
  console.log(`the check sum of ${filename} is ${checksum(data)}`);
}

main();
