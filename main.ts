import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// A whole story in one network name: the gold-digger trope, twisted —
// married the neighbor not for love or money, but for the password.
const entry = "Married Neighbor For Password";

// Gate: UTF-8 text of 1 to 32 characters, not only white space.
const charCount = [...entry].length;
if (charCount < 1 || charCount > 32 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-32 characters and not only white space, got ${charCount}`);
}

const outputPath = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");
console.log(entry);
