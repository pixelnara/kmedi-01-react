import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.resolve(__dirname, "..", "src", "app");
const meta = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, "..", "src", "fragments", "_meta.json"),
    "utf8",
  ),
);

function comp(name) {
  return (
    name
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("") + "Page"
  );
}

for (const [name, m] of Object.entries(meta)) {
  const isIndex = name === "index";
  const dir = isIndex ? APP : path.join(APP, name);
  fs.mkdirSync(dir, { recursive: true });

  const importPath = "@/fragments/" + name;
  const body = `import Page from '@/components/Page';
import fragment from '${importPath}';

export const metadata = {
  title: ${JSON.stringify(m.title)},
  description: ${JSON.stringify(m.desc)},
};

export default function ${comp(name)}() {
  return (
    <Page
      fragment={fragment}
      pageCss={${JSON.stringify(m.pageCss)}}
      pageScripts={${JSON.stringify(m.pageScripts)}}
      hasMobileBar={${m.hasMobileBar}}
      hasImageSlot={${m.hasImageSlot}}
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.jsx"), body);
  console.log("wrote", path.relative(APP, path.join(dir, "page.jsx")));
}
