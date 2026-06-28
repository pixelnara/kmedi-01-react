# KMEDITOUR — Next.js (국문)

기존 국문 HTML/CSS/JS 사이트(`../`)를 화면·동작 그대로 유지하며 Next.js(App Router)로 변환한 프로젝트.

## 실행

```bash
npm install
npm run build   # 정적 빌드 검증
npm run dev     # 개발 서버 (http://localhost:3000)
npm run start   # 프로덕션 서버 (build 이후)
```

## 구조

- `src/app/*/page.jsx` — HTML 파일별 라우트. `index.html → /`, `about.html → /about` …
- `src/components/` — 공통 컴포넌트
  - `Header`, `GnbDrawer`(GNB·모바일 드로어), `Footer`, `MainContent`, `Modals`, `SkipLink`
  - `Page` — 위 컴포넌트를 조립하는 공통 골격
  - `Scripts` — 원본 vanilla JS(app/contact-popup/mobile-bar/페이지 스크립트)를 원래 순서대로 로드
  - 모바일 하단바·문의 팝업은 각각 `public/js/mobile-bar.js`, `public/js/contact-popup.js`가 클라이언트에서 주입
- `src/fragments/` — 각 페이지의 마크업 조각(원본 그대로). `scripts/extract.mjs`로 생성
- `public/css`, `public/js`, `public/assets` — 원본 자산 그대로 사용

## 재생성 (원본 수정 시)

원본 HTML을 수정했다면 조각/페이지를 다시 생성:

```bash
node scripts/extract.mjs    # ../*.html → src/fragments/*
node scripts/gen-pages.mjs  # src/app/*/page.jsx 재생성
```

## 변환 원칙

- 디자인을 새로 만들지 않고 원본 마크업을 `dangerouslySetInnerHTML`로 그대로 렌더링.
- CSS는 원본 파일을 그대로 사용(공통은 `layout.jsx`, 페이지별은 각 page에서 link).
- 내부 링크 `*.html` → Next 라우트(`/about` 등)로 일괄 변환(마크업·JS 모두).
- 페이지 간 이동은 일반 `<a>`(전체 새로고침)로 원본 정적 사이트 동작과 동일.
