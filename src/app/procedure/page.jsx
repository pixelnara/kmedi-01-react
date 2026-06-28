import Page from '@/components/Page';
import fragment from '@/fragments/procedure';

export const metadata = {
  title: "프리미엄 시술 — 필러·보톡스·리프팅·레이저 | KMEDITOUR",
  description: "당신만을 위한 맞춤 솔루션, 안전하고 검증된 한국 의료 시술을 경험해보세요. 필러, 보톡스, 실리프팅, 레이저, 스킨부스터, 피부관리, 지방분해.",
};

export default function ProcedurePage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/subpage.css", "css/procedure.css"]}
      pageScripts={["js/procedure.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
