import Page from '@/components/Page';
import fragment from '@/fragments/product';

export const metadata = {
  title: "상품 상세 — KMEDITOUR 코스메틱",
  description: "",
};

export default function ProductPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/components/subpage.css", "css/product.css"]}
      pageScripts={["js/product.js"]}
      hasMobileBar={true}
      hasImageSlot={false}
    />
  );
}
