import RawHtml from "./RawHtml";

// 페이지 본문 (<main> 포함)
export default function MainContent({ html }) {
  return <RawHtml html={html} className="page-main-wrap" />;
}
