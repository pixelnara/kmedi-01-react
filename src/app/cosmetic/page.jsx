import Page from '@/components/Page';
import fragment from '@/fragments/cosmetic';

export const metadata = {
  title: "코스메틱 — KMEDITOUR · 프리미엄 K-뷰티 화장품 | Premium Concierge in Korea",
  description: "KMEDITOUR 코스메틱 — 프리미엄 K-뷰티 화장품. 한국 최고의 스킨케어 제품을 만나보세요. 세럼, 크림, 에센스, 미스트 등 다양한 뷰티 제품을 제공합니다.",
};

export default function CosmeticPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/cosmetic.css"]}
      pageScripts={["js/cosmetic.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
