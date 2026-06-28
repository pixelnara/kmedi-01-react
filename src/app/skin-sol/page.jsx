import Page from '@/components/Page';
import fragment from '@/fragments/skin-sol';

export const metadata = {
  title: "나의 피부 솔루션 찾기 — 나의 피부 솔루션 찾기 | KMEDITOUR",
  description: "4가지 항목에서 나의 피부 특성을 선택하면 AI가 맞춤 피부 타입을 분석합니다. 나의 피부 솔루션 찾기 — KMEDITOUR",
};

export default function SkinSolPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/skin-sol.css"]}
      pageScripts={["js/pss-state.js","js/skin-sol.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
