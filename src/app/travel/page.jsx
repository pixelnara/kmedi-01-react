import Page from '@/components/Page';
import fragment from '@/fragments/travel';

export const metadata = {
  title: "투어 — 호텔 & 쇼핑 | KMEDITOUR",
  description: "KMEDITOUR 투어. 서울의 프리미엄 호텔과 쇼핑 명소를 탐색하세요.",
};

export default function TravelPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/travel.css"]}
      pageScripts={["js/travel.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
