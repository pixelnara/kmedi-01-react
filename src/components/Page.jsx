import SkipLink from "./SkipLink";
import Header from "./Header";
import GnbDrawer from "./GnbDrawer";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Modals from "./Modals";
import Scripts from "./Scripts";

// 모든 페이지의 공통 골격을 조립한다.
// 디자인/동작을 원본과 동일하게 유지하기 위해 각 영역의 마크업은 원본 fragment를 그대로 렌더링한다.
export default function Page({
  fragment,
  pageCss = [],
  pageScripts = [],
  hasMobileBar = false,
  hasImageSlot = false,
}) {
  return (
    <>
      {pageCss.map((href) => (
        <link key={href} rel="stylesheet" href={"/" + href} />
      ))}
      <SkipLink html={fragment.skip} />
      <Header html={fragment.header} />
      <GnbDrawer html={fragment.drawer} />
      <MainContent html={fragment.main} />
      <Footer html={fragment.footer} />
      <Modals html={fragment.modals} />
      <Scripts
        pageScripts={pageScripts}
        hasMobileBar={hasMobileBar}
        hasImageSlot={hasImageSlot}
      />
    </>
  );
}
