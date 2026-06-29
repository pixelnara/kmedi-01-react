import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..', 'k-medi-web-KoEn-0728', 'ko');
const OUT = path.resolve(__dirname, '..', 'src', 'fragments');
fs.mkdirSync(OUT, { recursive: true });

// CSS loaded globally in layout (shared chrome). Everything else is page-scoped.
const SHARED_CSS = new Set([
  'css/font.css', 'css/reset.css', 'css/theme.css', 'css/common.css',
  'css/components/button.css', 'css/components/accordion.css', 'css/components/modal.css',
  'css/components/card.css', 'css/components/tab.css', 'css/components/breadcrumb.css',
  'css/components/header.css', 'css/components/footer.css', 'css/components/subpage.css',
  'css/components/topbar.css', 'css/components/mag-card.css', 'css/components/travel-card.css',
]);

// Rewrite "*.html" links and relative asset paths for Next.js
function rewriteLinks(s) {
  return s
    .replace(/\.\.\/(assets|css|js)\//g, '/$1/')
    .replace(/([a-z0-9][a-z0-9-]*)\.html/gi, (_, base) =>
      base.toLowerCase() === 'index' ? '/' : '/' + base
    );
}

function between(html, startRe, endRe) {
  const s = html.search(startRe);
  if (s < 0) return null;
  const rest = html.slice(s);
  const e = rest.search(endRe);
  if (e < 0) return null;
  return rest.slice(0, e);
}

const files = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
const meta = {};

for (const file of files) {
  const name = file.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(ROOT, file), 'utf8');

  // body inner
  const bodyInner = html.slice(html.indexOf('<body>') + '<body>'.length, html.lastIndexOf('</body>'));

  // skip-link (before header), optional
  const skipMatch = bodyInner.match(/<a class="skip-link"[\s\S]*?<\/a>/);
  const skip = skipMatch ? skipMatch[0] : '';

  const headerStart = bodyInner.search(/<header\b/);
  const headerEnd = bodyInner.indexOf('</header>') + '</header>'.length;
  const header = bodyInner.slice(headerStart, headerEnd);

  const mainStart = bodyInner.search(/<main\b/);
  const mainEnd = bodyInner.indexOf('</main>') + '</main>'.length;
  const drawer = bodyInner.slice(headerEnd, mainStart);   // gnb-overlay / mobile drawer
  const main = bodyInner.slice(mainStart, mainEnd);

  const footerStart = bodyInner.search(/<footer\b/);
  const footerEnd = bodyInner.indexOf('</footer>') + '</footer>'.length;
  const footer = bodyInner.slice(footerStart, footerEnd);

  // modals: between </footer> and first <script>
  const afterFooter = bodyInner.slice(footerEnd);
  const scriptIdx = afterFooter.search(/<script\b/);
  const modals = (scriptIdx >= 0 ? afterFooter.slice(0, scriptIdx) : afterFooter).trim();

  const fragments = {
    skip: rewriteLinks(skip),
    header: rewriteLinks(header),
    drawer: rewriteLinks(drawer),
    main: rewriteLinks(main),
    footer: rewriteLinks(footer),
    modals: rewriteLinks(modals),
  };

  // css links (page-scoped only) — normalize ../css/ → css/
  const cssLinks = [...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)]
    .map(m => m[1].replace(/^\.\.\//, ''));
  const pageCss = cssLinks.filter(href => !SHARED_CSS.has(href));

  // page-specific scripts (exclude globals handled by GlobalScripts)
  const GLOBAL_JS = new Set(['js/image-slot.js', 'js/app.js', 'js/contact-popup.js', 'js/mobile-bar.js', 'js/lang-nav.js']);
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)]
    .map(m => m[1].replace(/^\.\.\//, ''));
  const pageScripts = scripts.filter(src => !GLOBAL_JS.has(src));
  const hasMobileBar = scripts.includes('js/mobile-bar.js');
  const hasImageSlot = scripts.includes('js/image-slot.js');

  // title + description from head
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1].trim();
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1];

  fs.writeFileSync(
    path.join(OUT, name + '.js'),
    'const f = ' + JSON.stringify(fragments) + ';\nexport default f;\n'
  );

  meta[name] = {
    route: name === 'index' ? '/' : '/' + name,
    pageCss,
    pageScripts,
    hasMobileBar,
    hasImageSlot,
    title,
    desc,
  };
}

fs.writeFileSync(path.join(OUT, '_meta.json'), JSON.stringify(meta, null, 2));
console.log('Extracted', Object.keys(meta).length, 'pages');
console.log(JSON.stringify(meta, null, 2));
