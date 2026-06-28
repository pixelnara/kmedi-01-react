import Page from '@/components/Page';
import fragment from '@/fragments/magazine-detail';

export const metadata = {
  title: "강남 피부과 투어 — 압구정에서 청담까지 | KMEDITOUR 매거진",
  description: "뷰티 코디네이터가 직접 다녀온 서울 최고의 피부과 클리닉 로드맵. 압구정부터 청담까지, 놓쳐서는 안 될 핵심 클리닉 7곳을 소개합니다.",
};

export default function MagazineDetailPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/subpage.css", "css/magazine.css"]}
      pageScripts={[]}
      hasMobileBar={true}
      hasImageSlot={false}
    />
  );
}
