import RawHtml from './RawHtml';

// 공통 헤더 (유틸 바 + GNB). 페이지별 변형(header--light 등)은 fragment에 그대로 보존됨.
export default function Header({ html }) {
  return <RawHtml html={html} className="site-header-wrap" />;
}
