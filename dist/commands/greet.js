"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = "greet <name>";
exports.desc = "Greet <name> with Hello";
const builder = (yargs) => yargs
    .options({
    upper: { type: "boolean", alias: "u", describe: "to uppercase" },
    verbose: { type: "boolean", alias: "v" },
})
    .positional("name", { type: "string", demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { name, upper, verbose } = argv;
    const greeting = `Henlo, ${name}`;
    if (verbose && upper) {
        process.stdout.write(`${greeting.toUpperCase()} welcome to tfc`);
    }
    else if (upper) {
        process.stdout.write(greeting.toUpperCase());
    }
    else {
        process.stdout.write(greeting);
    }
    process.exit(0);
};
exports.handler = handler;
//# sourceMappingURL=greet.js.map