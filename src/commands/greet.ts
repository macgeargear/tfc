import type { Arguments, CommandBuilder } from "yargs";

type Options = {
  name: string;
  upper: boolean | undefined;
  verbose: boolean | undefined;
};

export const command: string = "greet <name>";
export const desc: string = "Greet <name> with Hello";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: "boolean", alias: "u", describe: "to uppercase" },
      verbose: { type: "boolean", alias: "v" },
    })
    .positional("name", { type: "string", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { name, upper, verbose } = argv;
  const greeting = `Henlo, ${name}`;

  if (verbose && upper) {
    process.stdout.write(`${greeting.toUpperCase()} welcome to tfc`);
  } else if (upper) {
    process.stdout.write(greeting.toUpperCase());
  } else {
    process.stdout.write(greeting);
  }

  process.exit(0);
};
