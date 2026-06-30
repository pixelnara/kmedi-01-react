import RawHtml from "./RawHtml";

// 본문 바로가기 링크 (접근성)
export default function SkipLink({ html }) {
  return <RawHtml html={html} className="skip-link-wrap" />;
}
