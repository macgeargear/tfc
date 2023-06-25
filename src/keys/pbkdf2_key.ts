import crypto from "crypto";

const password = "foobarbaz";
const salt = crypto.randomBytes(16).toString("hex");
const iterations = 1 << 30;
const keyLength = 32;

console.log(salt);
export function getKeyPBKDF2(
  password: string,
  salt: string,
  iterations: number,
  keyLength: number
): string {
  let key: string | undefined;
  crypto.pbkdf2(
    password,
    salt,
    iterations,
    keyLength,
    "sha512",
    (err, derivedKey) => {
      if (err) throw err;
      key = derivedKey.toString("hex");
    }
  );
  return key!;
}
