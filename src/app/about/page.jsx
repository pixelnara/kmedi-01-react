import Page from '@/components/Page';
import fragment from '@/fragments/about';

export const metadata = {
  title: "About — KMEDITOUR · 프리미엄 컨시어지 인 코리아 | Premium Concierge in Korea",
  description: "KMEDITOUR 소개 — 한국 뷰티·의료·관광의 가장 신뢰할 수 있는 파트너. 정부 공인, 검증된 파트너 기관, 1:1 전담 코디네이터. Premium Concierge in Korea.",
};

export default function AboutPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/about.css"]}
      pageScripts={["js/about.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
