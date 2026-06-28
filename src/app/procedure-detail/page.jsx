import Page from '@/components/Page';
import fragment from '@/fragments/procedure-detail';

export const metadata = {
  title: "필러 | K-MEDI TOUR",
  description: "꺼진 볼륨을 복원하여 자연스러운 볼륨과 세련된 얼굴 윤곽 완성하는 비수술 미용 시술 — 필러 상세 안내",
};

export default function ProcedureDetailPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/procedure-detail.css"]}
      pageScripts={["js/procedure-detail.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
