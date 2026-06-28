// Renders a static HTML fragment exactly as authored in the original site.
// Used by the shared chrome components so markup stays byte-identical.
export default function RawHtml({ html, as: Tag = 'div', className }) {
  if (!html) return null;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
