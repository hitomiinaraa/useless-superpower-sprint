import { mkdirSync, writeFileSync } from "node:fs";

// One original line (81 characters, plain text, no emojis) describing a
// hilariously useless superpower, written for make.fun's
// "One Line, Zero Use: The Useless Superpower Sprint" bounty.
const LINE =
  "I can read dogs' minds, but only when they are thinking about absolutely nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
