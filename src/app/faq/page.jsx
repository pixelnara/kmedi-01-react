import Page from '@/components/Page';
import fragment from '@/fragments/faq';

export const metadata = {
  title: "FAQ — KMEDITOUR · 프리미엄 컨시어지 인 코리아",
  description: "KMEDITOUR 자주 묻는 질문 — 예약, 서비스, 시술, 쇼핑에 대한 궁금증을 해결하세요.",
};

export default function FaqPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/faq.css"]}
      pageScripts={["js/faq.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
