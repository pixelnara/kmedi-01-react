import Page from "@/components/Page";
import fragment from "@/fragments/center";

export const metadata = {
  title: "휴그로 센터 — 프리미엄 뷰티 & 웰니스 | Hugro Center · KMEDITOUR",
  description:
    "서울 압구정 휴그로 센터 — AI 피부 분석, 프리미엄 트리트먼트, 1:1 전담 코디네이터. Premium Beauty & Wellness Destination in Seoul, Korea.",
};

export default function CenterPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/subpage.css", "css/center.css"]}
      pageScripts={["js/center.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
