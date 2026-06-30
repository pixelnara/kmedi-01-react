import Page from "@/components/Page";
import fragment from "@/fragments/index";

export const metadata = {
  title: "KMEDITOUR — 프리미엄 컨시어지 인 코리아 | Premium Concierge in Korea",
  description:
    "KMEDITOUR는 한국 뷰티·의료·관광을 아우르는 프리미엄 컨시어지 서비스입니다. 전담 코디네이터가 처음부터 끝까지 함께합니다. Premium Concierge in Korea.",
};

export default function IndexPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/home.css"]}
      pageScripts={["js/index.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
