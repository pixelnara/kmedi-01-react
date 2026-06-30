import RawHtml from "./RawHtml";

// GNB 오버레이 / 모바일 드로어
export default function GnbDrawer({ html }) {
  return <RawHtml html={html} className="gnb-drawer-wrap" />;
}
