import Page from '@/components/Page';
import fragment from '@/fragments/magazine';

export const metadata = {
  title: "매거진 — 뷰티·의료·여행 인사이트 | KMEDITOUR",
  description: "한국 의료 뷰티의 모든 것. 시술 트렌드, 여행 가이드, 웰니스 루틴까지 — KMEDITOUR 에디토리얼.",
};

export default function MagazinePage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/subpage.css", "css/magazine.css"]}
      pageScripts={["js/magazine.js"]}
      hasMobileBar={true}
      hasImageSlot={false}
    />
  );
}
