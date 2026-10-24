import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const tokens = JSON.parse(await readFile(join(root, "tokens.json"), "utf8"));
const kebab = value => value.replace(/[A-Z]/g, letter => "-" + letter.toLowerCase());
let css = ':root {\n  --atq-font-body: "' + tokens.fonts.body + '", sans-serif;\n  --atq-font-display: "' + tokens.fonts.display + '", sans-serif;\n  --atq-font-mono: ui-monospace, monospace;\n';
for (const [group, prefix, unit] of [
  ["spacing", "space", "px"], ["radius", "radius", "px"], ["fontSize", "font-size", "px"],
  ["lineHeight", "line-height", ""], ["fontWeight", "weight", ""], ["size", "size", "px"],
  ["motion", "motion", "ms"], ["layer", "layer", ""]
]) {
  for (const [name, value] of Object.entries(tokens[group])) css += "  --atq-" + prefix + "-" + kebab(name) + ": " + value + unit + ";\n";
}
css += "}\n";
for (const theme of ["light", "dark"]) {
  css += (theme === "light" ? ":root, " : "") + '[data-atq-theme="' + theme + '"] {\n';
  for (const [name, value] of Object.entries(tokens.colors[theme])) css += "  --atq-" + kebab(name) + ": " + value + ";\n";
  css += "}\n";
}
const componentCss = await readFile(join(root, "components.css"), "utf8");
const logo = await readFile(join(root, "assets", "logo-3daltoque.png"));
const galleryPath = join(root, "galeria.html");
let gallery = await readFile(galleryPath, "utf8");
for (const [id, content] of [["atq-tokens", css], ["atq-components", componentCss]]) {
  const pattern = new RegExp('<style id="' + id + '">[\\s\\S]*?<\\/style>');
  if (!pattern.test(gallery)) throw new Error("Falta la sección " + id + " en la galería.");
  gallery = gallery.replace(pattern, () => '<style id="' + id + '">' + content + "</style>");
}
gallery = gallery.replace(/(<img data-brand-logo src=")[^"]*(")/g, (_, before, after) => before + "data:image/png;base64," + logo.toString("base64") + after);
await mkdir(join(root, "mobile"), { recursive: true });
await writeFile(join(root, "tokens.css"), css, "utf8");
await writeFile(join(root, "mobile", "tokens.native.ts"), "export const tokens = " + JSON.stringify(tokens, null, 2) + " as const;\n", "utf8");
await writeFile(galleryPath, gallery, "utf8");
console.log("Tokens Web/Mobile y galería sincronizados.");
