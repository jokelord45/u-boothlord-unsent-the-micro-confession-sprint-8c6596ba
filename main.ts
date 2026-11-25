import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// Draft 2 (revision): the first draft was a one-off prank confession. This
// version adds the years of guilty atonement, so the reason it stayed in
// drafts is felt in the words — shame that never faded — and the To: line and
// the message need each other: only a little brother gets a present every
// year to make up for a stolen $20.
const entry = `To: my little brother
I took the $20 from your birthday card in 2019, told mum the dog ate the envelope, and I've bought you a present every year since to make up for it.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
