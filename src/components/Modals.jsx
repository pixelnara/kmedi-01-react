import RawHtml from './RawHtml';

// 로그인 모달 등 푸터 이후 모달 영역
export default function Modals({ html }) {
  return <RawHtml html={html} className="site-modals-wrap" />;
}
