import { execSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "assets", "media-b64");
const parts = readdirSync(dir)
  .filter((name) => name.endsWith(".txt"))
  .sort();
if (!parts.length) {
  throw new Error("No media archives found in assets/media-b64");
}
const b64 = parts.map((name) => readFileSync(join(dir, name), "utf8")).join("");
const tmp = mkdtempSync(join(tmpdir(), "huajing-media-"));
const archive = join(tmp, "media.tar.gz");
writeFileSync(archive, Buffer.from(b64, "base64"));
execSync(`tar -xzf "${archive}" -C "${root}"`);
console.log("Restored media from", parts.length, "parts");
