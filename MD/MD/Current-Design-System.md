# Current Design System

## 1. Purpose

현재 개발 완료된 메인 페이지를 기준으로 현행 디자인 시스템 토큰을 정리한 문서입니다.

분석 대상: `index.html`, `css/reset.css`, `css/theme.css`, `css/common.css`, `css/home.css`, `css/about.css`, `css/center.css`

---

## 2. Important Context

이 프로젝트는 primitive-first 방식으로 설계된 디자인 시스템이 아닙니다.

현재 웹사이트는 semantic token을 기준으로 먼저 제작되었고,
primitive token은 이후 semantic 값을 정리하기 위해 역추적된 raw value layer입니다.

> **분석 우선순위:** Semantic Token → Component Usage → Primitive Token Reference

---

## 3. Token Architecture

```
Primitive Token  →  Semantic Token  →  Component Usage
(raw value)          (intent name)       (CSS selector)
```

- 현행 팔레트: **Gray · Brown · Violet · Amber · Gold · Social(Kakao)**
- CSS 파일 구조: `reset.css` (browser reset) → `theme.css` (tokens) → `common.css` (shared) → `[page].css` (page-specific)

---

## 4. OLD vs Current 구조 비교

| 항목            | OLD-Dev-Token                             | Current (site-0618-blue)                             |
| --------------- | ----------------------------------------- | ---------------------------------------------------- |
| 폰트            | Playfair Display + DM Sans                | Optima/Candara/Pretendard (단일 스택)                |
| 색상 팔레트     | Gray/Gold/Blue/Coral/Sage                 | Gray / Brown / Violet / Amber / Gold                 |
| Semantic naming | ShadCN 방식 (`--background`, `--primary`) | 카테고리 번호형 (`--text-gray-6`, `--border-gray-1`) |
| Gradient        | `--hero-gradient` (composed)              | `--accent-gradient` (CTA section 전용)               |

---

## 5. Current Semantic Tokens

### 5.1 Background

명시적 단색 배경 — 페이지·헤더·카드 등 solid bg

| Semantic Token | Primitive    | Actual Value | Usage                                    | 사용수 |
| -------------- | ------------ | ------------ | ---------------------------------------- | ------ |
| `--bg-white`   | `--white`    | #ffffff      | body, header, card, footer, gnb-overlay  | 35     |
| `--bg-gray`    | `--gray-150` | #e4e6ec      | accordion item 배경                      | 1      |
| `--bg-dark`    | `--gray-950` | #101219      | trust section, gnb-banner, top-btn hover | 16     |

### 5.2 Surface

섹션·컴포넌트 레벨 서피스

| Semantic Token     | Primitive    | Actual Value | Usage                                      | 사용수 |
| ------------------ | ------------ | ------------ | ------------------------------------------ | ------ |
| `--surface-gray-1` | `--gray-50`  | #f2f4f8      | section bg, booking tab, lang-option hover | 22     |
| `--surface-gray-2` | `--gray-200` | #dcdfe5      | compare\_\_col 일반 컬럼 배경              | 1      |
| `--surface-gray-3` | `--brown-50` | #f7f4f2      | center map-card 배경 (웜 크림)             | 1      |

### 5.3 Text

gray-1~7: 밝은(gray-300) → 어두운(gray-950) 순

| Semantic Token   | Primitive      | Actual Value | Usage                                            | 사용수 |
| ---------------- | -------------- | ------------ | ------------------------------------------------ | ------ |
| `--text-gray-1`  | `--gray-300`   | #b8bdc7      | 플레이스홀더, 비활성 아이콘                      | 3      |
| `--text-gray-2`  | `--gray-400`   | #949aa8      | 날짜, sub-head, gnb 서브                         | 26     |
| `--text-gray-3`  | `--gray-500`   | #6b7180      | 본문 기본                                        | 78     |
| `--text-gray-4`  | `--gray-600`   | #515767      | 본문 보조 (filter chip, footer links)            | 4      |
| `--text-gray-5`  | `--gray-700`   | #3d4352      | 폼 레이블 (login modal), why-journey desc        | 2      |
| `--text-gray-6`  | `--gray-900`   | #1a1e28      | 헤딩·강조 제목 전반                              | 142    |
| `--text-gray-7`  | `--gray-950`   | #101219      | 최강 강조 (모바일 헤더, login 제목)              | 25     |
| `--text-white`   | `--white`      | #ffffff      | 다크/컬러 배경 위 흰색 텍스트                    | 50     |
| `--text-caption` | `--violet-500` | #3b33d9      | eyebrow, kicker, bk-label, booking tab underline | 45     |
| `--rating`       | `--amber-400`  | #d9ad3f      | 별점 (review**star, treat-card**en)              | 4      |

### 5.4 Border

gray-1~4: 밝은(gray-200) → 어두운(gray-800) 순

| Semantic Token    | Primitive    | Actual Value | Usage                                  | 사용수 |
| ----------------- | ------------ | ------------ | -------------------------------------- | ------ |
| `--border-gray-1` | `--gray-200` | #dcdfe5      | 기본 구분선 (card, feature, gnb, 전반) | 94     |
| `--border-gray-2` | `--gray-300` | #b8bdc7      | 연한 구분선 (mobile gnb)               | 1      |
| `--border-gray-3` | `--gray-400` | #949aa8      | 중간 구분선 (footer top/bottom)        | 2      |
| `--border-gray-4` | `--gray-800` | #292e3d      | 강조 보더 (cnav-btn, filter chip)      | 7      |

### 5.5 Button

| Semantic Token  | Primitive      | Actual Value | Usage                                           | 사용수 |
| --------------- | -------------- | ------------ | ----------------------------------------------- | ------ |
| `--btn-primary` | `--gray-950`   | #101219      | .btn--solid, .btn--primary bg, filter.is-active | 7      |
| `--btn-secondary`     | `--violet-600` | #2e26b5      | .btn--primary:hover 배경                        | 1      |

### 5.6 Accent

| Semantic Token      | Primitive      | Actual Value | Usage                                                            | 사용수 |
| ------------------- | -------------- | ------------ | ---------------------------------------------------------------- | ------ |
| `--accent-mid`      | `--violet-500` | #3b33d9      | feature dots active, stay-card tags, acc-icon                    | 3      |
| `--accent-dark1`    | `--violet-700` | #2a2287      | accordion head bg, btn--primary2 bg, hiw icon, proc-sheet banner | 9      |
| `--accent-dark2`    | `--violet-800` | #1f1957      | compare**col--ours bg, footer**bottom, btn--primary2:hover       | 3      |
| `--accent-gradient` | violet-900→500 | gradient     | cta-dark 섹션 전체 배경                                          | 1      |

> `--text-caption`과 `--accent-mid`는 동일값(violet-500).

### 5.7 Social Login

Kakao 소셜 로그인 전용. 사이트 브랜드 컬러 아님.

| Semantic Token     | Primitive        | Actual Value | Usage                         | 사용수 |
| ------------------ | ---------------- | ------------ | ----------------------------- | ------ |
| `--btn-kakao`      | `--kakao-yellow` | #fee500      | login-modal Kakao 버튼 배경   | —      |
| `--btn-kakao-text` | `--kakao-dark`   | #191919      | login-modal Kakao 버튼 텍스트 | —      |

### 5.8 Layout

| Token        | Value                    | Usage                           |
| ------------ | ------------------------ | ------------------------------- |
| `--maxw`     | 1920px                   | .wrap max-width                 |
| `--maxw-02`  | 1000px                   | 보조 max-width                  |
| `--gutter`   | clamp(16px, 1.6vw, 34px) | .wrap padding                   |
| `--header-h` | 92px                     | header height, hero padding-top |

---

## 6. Current Primitive Tokens

### 6.1 Gray Scale

| Primitive    | Value   | Semantic Reference                            | Direct CSS |
| ------------ | ------- | --------------------------------------------- | ---------- |
| `--white`    | #ffffff | `--bg-white`, `--text-white`                  | —          |
| `--gray-50`  | #f2f4f8 | `--surface-gray-1`                            | —          |
| `--gray-150` | #e4e6ec | `--bg-gray`                                   | —          |
| `--gray-200` | #dcdfe5 | `--border-gray-1`, `--surface-gray-2`         | —          |
| `--gray-300` | #b8bdc7 | `--border-gray-2`, `--text-gray-1`            | —          |
| `--gray-400` | #949aa8 | `--border-gray-3`, `--text-gray-2`            | —          |
| `--gray-500` | #6b7180 | `--text-gray-3`                               | —          |
| `--gray-600` | #515767 | `--text-gray-4`                               | —          |
| `--gray-700` | #3d4352 | `--text-gray-5`                               | —          |
| `--gray-800` | #292e3d | `--border-gray-4`                             | —          |
| `--gray-900` | #1a1e28 | `--text-gray-6`                               | —          |
| `--gray-950` | #101219 | `--bg-dark`, `--btn-primary`, `--text-gray-7` | —          |

### 6.2 Brown Scale

| Primitive                   | Value   | Semantic Reference | Direct CSS  |
| --------------------------- | ------- | ------------------ | ----------- |
| `--brown-50`                | #f7f4f2 | `--surface-gray-3` | —           |
| `--brown-100`~`--brown-900` | 전체    | —                  | — (Palette) |

### 6.3 Violet Scale

| Primitive                    | Value   | Semantic Reference               | Direct CSS                                |
| ---------------------------- | ------- | -------------------------------- | ----------------------------------------- |
| `--violet-50`~`--violet-200` | 전체    | —                                | — (Palette)                               |
| `--violet-300`               | #8681e4 | —                                | `about.css` `.guarantee-col__icon` (직접) |
| `--violet-400`               | #6861e0 | —                                | — (Palette)                               |
| `--violet-500`               | #3b33d9 | `--text-caption`, `--accent-mid` | —                                         |
| `--violet-600`               | #2e26b5 | `--btn-secondary`                      | —                                         |
| `--violet-700`               | #2a2287 | `--accent-dark1`                 | —                                         |
| `--violet-800`               | #1f1957 | `--accent-dark2`                 | —                                         |
| `--violet-900`               | #151132 | `--accent-gradient` (내부)       | —                                         |

> violet-300: `--accent-light` 삭제 후 직접 참조 1건 (about.css).

### 6.4 Amber Scale

| Primitive     | Value   | Semantic Reference | Direct CSS  |
| ------------- | ------- | ------------------ | ----------- |
| `--amber-400` | #d9ad3f | `--rating`         | —           |
| 나머지        | 전체    | —                  | — (Palette) |

### 6.5 Gold Scale

| Primitive    | Value   | Semantic Reference | Direct CSS                           |
| ------------ | ------- | ------------------ | ------------------------------------ |
| `--gold-600` | #9b7943 | —                  | `home.css` `.treat-highlight` (직접) |
| 나머지       | 전체    | —                  | — (Palette)                          |

> gold-600: `--text-gold` 삭제 후 직접 참조 1건 (home.css).

### 6.6 Social (Kakao)

| Primitive        | Value   | Semantic Reference | Direct CSS |
| ---------------- | ------- | ------------------ | ---------- |
| `--kakao-yellow` | #fee500 | `--btn-kakao`      | —          |
| `--kakao-dark`   | #191919 | `--btn-kakao-text` | —          |

---

## 7. Semantic → Primitive Mapping (전체)

| Semantic Token      | Primitive        | Actual Hex |
| ------------------- | ---------------- | ---------- |
| `--bg-white`        | `--white`        | #ffffff    |
| `--bg-gray`         | `--gray-150`     | #e4e6ec    |
| `--bg-dark`         | `--gray-950`     | #101219    |
| `--surface-gray-1`  | `--gray-50`      | #f2f4f8    |
| `--surface-gray-2`  | `--gray-200`     | #dcdfe5    |
| `--surface-gray-3`  | `--brown-50`     | #f7f4f2    |
| `--text-gray-1`     | `--gray-300`     | #b8bdc7    |
| `--text-gray-2`     | `--gray-400`     | #949aa8    |
| `--text-gray-3`     | `--gray-500`     | #6b7180    |
| `--text-gray-4`     | `--gray-600`     | #515767    |
| `--text-gray-5`     | `--gray-700`     | #3d4352    |
| `--text-gray-6`     | `--gray-900`     | #1a1e28    |
| `--text-gray-7`     | `--gray-950`     | #101219    |
| `--text-white`      | `--white`        | #ffffff    |
| `--text-caption`    | `--violet-500`   | #3b33d9    |
| `--rating`          | `--amber-400`    | #d9ad3f    |
| `--border-gray-1`   | `--gray-200`     | #dcdfe5    |
| `--border-gray-2`   | `--gray-300`     | #b8bdc7    |
| `--border-gray-3`   | `--gray-400`     | #949aa8    |
| `--border-gray-4`   | `--gray-800`     | #292e3d    |
| `--btn-primary`     | `--gray-950`     | #101219    |
| `--btn-secondary`         | `--violet-600`   | #2e26b5    |
| `--accent-mid`      | `--violet-500`   | #3b33d9    |
| `--accent-dark1`    | `--violet-700`   | #2a2287    |
| `--accent-dark2`    | `--violet-800`   | #1f1957    |
| `--accent-gradient` | violet-900→500   | gradient   |
| `--btn-kakao`       | `--kakao-yellow` | #fee500    |
| `--btn-kakao-text`  | `--kakao-dark`   | #191919    |

**Active Semantic Tokens: 28개**

---

## 8. Component Token Usage

### 8.1 Header

| 상태              | 사용 토큰                                        |
| ----------------- | ------------------------------------------------ |
| 투명 (스크롤 전)  | `--text-white`                                   |
| Solid (스크롤 후) | `--bg-white`, `--text-gray-6`, `--border-gray-1` |
| 모바일 헤더       | `--bg-white`, `--text-gray-7`                    |

### 8.2 Navigation (GNB)

| 컴포넌트           | 사용 토큰                                      |
| ------------------ | ---------------------------------------------- |
| GNB overlay (다크) | `--bg-dark`, `--text-white`, `--border-gray-1` |
| GNB mobile panel   | `--surface-gray-1`                             |
| GNB mobile h4      | `--text-gray-6`, `--border-gray-1`             |

### 8.3 Buttons

| 버튼                            | 배경             | 텍스트          | 호버                |
| ------------------------------- | ---------------- | --------------- | ------------------- |
| `.btn--solid` / `.btn--primary` | `--btn-primary`  | `--bg-white`    | 유지                |
| `.btn--primary:hover`           | `--btn-secondary`      | `--text-white`  | —                   |
| `.btn--primary2`                | `--accent-dark1` | `--bg-white`    | `--accent-dark2`    |
| outline                         | transparent      | `--text-gray-6` | bg: `--text-gray-6` |

### 8.4 Services Accordion (`.acc`)

home.css `#services` 섹션의 뷰티/메디컬/트래블 서비스 아코디언. (구 why-us 아코디언 `.why-acc`는 제거됨)

| 요소      | 사용 토큰                        |
| --------- | -------------------------------- |
| 기본 배경 | `--bg-gray`                      |
| 헤더      | `--bg-white`, `--text-gray-6`    |
| 열림 헤더 | `--accent-dark1`, `--text-white` |
| 아이콘    | `--accent-mid`                   |

### 8.5 Why Journey 5-col Grid (`.why-journey`)

why-us 섹션의 5컬럼 아이콘+텍스트 그리드 (아코디언에서 교체됨).

| 요소        | 사용 토큰 / 직접 참조      |
| ----------- | -------------------------- |
| 카드 배경   | `--bg-white`               |
| 구분선      | `--border-gray-1`          |
| 아이콘 원   | `var(--violet-600)` (직접) |
| 메인 라벨   | `--text-gray-6`            |
| 서브 타이틀 | `var(--violet-600)` (직접) |
| 본문 설명   | `--text-gray-5`            |

### 8.5 Compare (Why Us)

| 요소        | 사용 토큰          |
| ----------- | ------------------ |
| 일반 컬럼   | `--surface-gray-2` |
| 우리 컬럼   | `--accent-dark2`   |
| c-highlight | `--accent-dark1`   |

### 8.6 Trust / CTA / Footer

| 섹션          | 배경                | 텍스트           |
| ------------- | ------------------- | ---------------- |
| Trust         | `--bg-dark`         | `--text-white`   |
| CTA Dark      | `--accent-gradient` | `--text-white`   |
| Footer        | `--bg-white`        | `--text-gray-6`  |
| Footer bottom | —                   | `--accent-dark2` |

### 8.7 Mobile Bar

| 요소 | 사용 토큰                                |
| ---- | ---------------------------------------- |
| 배경 | `--bg-dark`                              |
| 버튼 | `rgba(255,255,255,0.6)` / `--text-white` |

---

## 9. Direct Primitive Usage (의도적)

semantic token 없이 primitive를 직접 참조하는 항목.

| Primitive      | 파일      | 위치                      | 사유                                           |
| -------------- | --------- | ------------------------- | ---------------------------------------------- |
| `--violet-300` | about.css | `.guarantee-col__icon`    | `--accent-light` 삭제 후 직접 유지             |
| `--gold-600`   | home.css  | `.treat-highlight`        | `--text-gold` 삭제 후 직접 유지                |
| `--violet-600` | home.css  | `.why-journey__icon-wrap` | 아이콘 원 배경 — semantic 없는 midtone violet  |
| `--violet-600` | home.css  | `.why-journey__icon-sub`  | 서브타이틀 컬러 — semantic 없는 midtone violet |

---

## 10. Hard-coded Values (의도된 값 · 토큰화 불필요)

| 값                         | 위치                             | 용도               |
| -------------------------- | -------------------------------- | ------------------ |
| `rgba(0,0,0,0.4)`          | hero overlay (데스크탑)          | 이미지 위 오버레이 |
| `rgba(255,255,255,0.92)`   | hero desc                        | 반투명 텍스트      |
| `rgba(255,255,255,0.78)`   | compare ours list                | 다크 bg 위 반투명  |
| `rgba(0,0,0,0.45)`         | hero counter                     | 슬라이드 카운터 bg |
| `linear-gradient(...)`     | stay-card, mem-card, follow-card | 이미지 그라디언트  |
| `29px`, `14.5px`, `13.5px` | brand, col-card, footer          | 특수 px 폰트       |

---

## 11. Final Rules

1. Semantic token이 Source of Truth. Primitive는 참조값.
2. CSS 파일에서 primitive 직접 참조는 허용하지 않음 (예외: 삭제된 semantic 대체 2건, why-journey 전용 midtone violet 2건).
3. rgba 투명도·이미지 오버레이는 토큰화 대상 아님.
4. 새 색상 추가 시 primitive → semantic 순서로 theme.css에 먼저 정의.

---

**변경 이력:**

- **2026-06-18 (Blue 제거)**: Blue scale 제거. Accent violet 통일.
- **2026-06-18 (CSS 폴더 분리)**: styles.css → css/common.css + page CSS. js/ 폴더 신설.
- **2026-06-18 (Token Audit)**: Semantic 36개로 확장. 전 CSS 파일 direct primitive 0건.
- **2026-06-18 (Token Cleanup)**: 중복/저사용 삭제 (text-body3, text-subtle2, text-link, text-gold, border-warm, accent, accent-light). 번호형 명명 체계 전환 (text-gray-1~7, border-gray-1~4, surface-gray-1~3). Background/Surface 카테고리 분리. Button 카테고리 신설 (btn-primary, btn-cta). Accent 정리 (mid, dark1, dark2, gradient). text-inverse → text-white. **Active Semantic: 28개.**
- **2026-06-18 (Why-Us 개편)**: why-us 아코디언(`.why-acc`) 제거 → 5-col 카드 그리드로 교체. `--violet-600` direct primitive 2건 신규 (`.why-journey__icon-wrap` bg, `.why-journey__icon-sub` color). `--text-gray-5` 사용처 +1 (icon-desc). **Direct Primitive: 2건 → 4건.**
- **2026-06-18 (reset.css 신설)**: 브라우저 리셋 규칙을 common.css에서 분리 → `css/reset.css` 생성. 로드 순서: reset → theme → common → page. 중복 제거: `.login-modal__input` box-sizing, `.proc-sheet__list` list-style/margin, `.why-journey__icons` list-style/padding/margin.
