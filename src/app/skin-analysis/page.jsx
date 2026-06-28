import Page from '@/components/Page';
import fragment from '@/fragments/skin-analysis';

export const metadata = {
  title: "피부 분석 시스템 — AI 피부 진단 & 케어 플랜 | KMEDITOUR",
  description: "AI 기반 피부 분석 시스템을 통해 피부 타입과 컨디션을 세밀하게 진단하고, 최적화된 맞춤 케어 및 시술 계획을 제안합니다.",
};

export default function SkinAnalysisPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/topbar.css", "css/components/subpage.css", "css/skin-analysis.css"]}
      pageScripts={["js/skin-analysis.js"]}
      hasMobileBar={false}
      hasImageSlot={true}
    />
  );
}
