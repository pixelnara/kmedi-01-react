import RawHtml from "./RawHtml";

// 공통 푸터
export default function Footer({ html }) {
  return <RawHtml html={html} className="site-footer-wrap" />;
}
