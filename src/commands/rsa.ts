import fs from "fs";
import { Arguments, CommandBuilder } from "yargs";
import { encryptTextRSA } from "../util";

type Options = {
  filename: string;
};

export const command: string = "encrypt <filename>";
export const desc: string =
  "encrypt <filename> by asymmetric encryption(Public-key cryptography)";

export const builder: CommandBuilder<Options, Options> = (yargs) => {
  return yargs.positional("filename", { type: "string", demandOption: true });
};

export const handler = (argv: Arguments<Options>): void => {
  const { filename } = argv;
  const data = fs.readFileSync(filename);
  const encryptedText = encryptTextRSA(data.toString());
  const result = `decrypted text: ${encryptedText.toString()}`;

  process.stdout.write(data);
  process.exit(0);
};
