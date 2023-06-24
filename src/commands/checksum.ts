import type { Arguments, CommandBuilder } from "yargs";
import fs from "fs";
import { checksum } from "../util";

type Options = {
  filename: string;
};

export const command: string = "checksum <filename>";
export const desc: string = "checksum data of  <filename>";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional("filename", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filename } = argv;
  const data = fs.readFileSync(filename, { encoding: "utf-8" });
  const checksumResult = checksum(data);

  process.stdout.write(`checksum of ${filename} is ${checksumResult}`);
  process.exit(0);
};
