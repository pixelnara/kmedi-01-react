// 공통(공유) 스타일시트 — 원본 각 페이지가 공통으로 로드하던 순서를 유지.
const SHARED_CSS = [
  '/css/font.css',
  '/css/reset.css',
  '/css/theme.css',
  '/css/components/button.css',
  '/css/components/accordion.css',
  '/css/components/modal.css',
  '/css/components/card.css',
  '/css/components/tab.css',
  '/css/components/breadcrumb.css',
  '/css/components/header.css',
  '/css/components/footer.css',
  '/css/components/subpage.css',
  '/css/components/topbar.css',
  '/css/components/mag-card.css',
  '/css/components/travel-card.css',
  '/css/common.css',
];

export const metadata = {
  title: 'KMEDITOUR — 프리미엄 컨시어지 인 코리아 | Premium Concierge in Korea',
  description:
    'KMEDITOUR는 한국 뷰티·의료·관광을 아우르는 프리미엄 컨시어지 서비스입니다.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://unpkg.com" />
        {SHARED_CSS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
