# Main_Page_Reference_Analysis.md

---

## 1. Document Purpose

현재 구현 완료된 Main Page(index.html)를 실제 코드 기준으로 분석한 문서이다.

신규 페이지 제작 시 동일한 사용자 경험을 유지할 수 있도록
실제 구현된 섹션 구조, UX 흐름, 레이아웃 패턴, 컴포넌트 패턴을 기록한다.

추정 없이 실제 구현 코드만을 근거로 작성한다.

---

## 2. Source Files Analyzed

| 파일                | 역할                                                      |
| ------------------- | --------------------------------------------------------- |
| `index.html`        | 페이지 전체 구조 및 콘텐츠                                |
| `css/reset.css`     | 브라우저 정규화 (box-sizing, margin/padding, 기본 스타일) |
| `css/theme.css`     | 디자인 토큰 (색상, 타이포그래피, 간격)                    |
| `css/common.css`    | 공통 레이아웃 (Header, Footer, GNB, Mobile Bar, 유틸리티) |
| `css/home.css`      | Home 전용 컴포넌트 스타일 및 반응형                       |
| `js/app.js`         | 슬라이더, 아코디언, 스크롤 등 인터랙션                    |
| `js/image-slot.js`  | 커스텀 이미지 슬롯                                        |
| `assets/`           | 인증 로고, 국기 SVG 이미지                                |

---

## 3. Role of Main Page

Main Page는 K-Medi Tour 브랜드와 사용자가 처음 만나는 페이지이다.

사용자가 페이지를 탐색하는 동안 다음을 경험한다.

- K-Medi Tour가 병원 예약 사이트가 아닌 프리미엄 컨시어지 서비스임을 이해
- 서비스 이용 방법과 제공 항목을 파악
- 공식 인증 기관을 통한 신뢰 형성
- 자연스럽게 상담 예약으로 유도

모든 신규 페이지는 이 경험 흐름을 계승해야 한다.

---

## 4. Actual Page Flow

실제 구현된 섹션 순서는 아래와 같다.

| 순서 | 섹션                  | HTML ID/Class                 | 배경                           |
| ---- | --------------------- | ----------------------------- | ------------------------------ |
| 1    | Header (고정)         | `.header`                     | 투명 → 스크롤 시 흰색          |
| 2    | GNB Overlay           | `.gnb-overlay`                | 어두움 (gray-950, 전체화면)                |
| 3    | Hero                  | `.hero`                       | 전체 뷰포트 슬라이드 이미지    |
| 4    | How It Works          | `#how .section`               | 흰색                           |
| 5    | Services              | `#services .section--surface` | 서피스                         |
| 6    | Why Journey Grid      | `#whyus .section--surface2`   | 서피스                         |
| 7    | Trust Band            | `.trust`                      | 검정                           |
| 8    | Magazine              | `#why .section`               | 흰색                           |
| 9    | Feature Slider        | `.feature`                    | 서피스                         |
| 10   | Highlights / News     | `#highlights .section`        | 흰색                           |
| 11   | CTA Dark              | `.cta-dark`                   | 바이올렛 그라디언트 (--violet-900 → --violet-500) |
| 12   | Follow Us             | `#follow .section--surface`   | 서피스                         |
| 13   | Footer                | `.footer`                     | 흰색                           |
| 14   | Mobile Bottom Bar     | `.mobile-bar--v1`             | 검정 (--gray-950, 모바일 전용) |
| 15   | Language Bottom Sheet | `#langSheet`                  | 흰색 (모달)                    |

### 섹션 간 연결 흐름

Hero의 "SCROLL" 인디케이터 → `#how` 앵커 이동

각 섹션의 CTA는 `#booking` 앵커로 연결

GNB 네비게이션은 `#how`, `#services`, `#whyus`, `#why`로 직접 이동

---

## 5. UX Flow

실제 구현된 섹션 순서 기준 사용자 경험 흐름이다.

```
Discover (Hero)
↓
Understand Process (How It Works — 3단계 프로세스)
↓
Explore Services (Services — 아코디언 5개 항목)
↓
Why Journey Grid (Why Us — 5-col 전문성 아이콘 카드)
↓
Verify Trust (Trust Band — 공식 인증 로고 3개)
↓
Explore Content (Magazine — 에디토리얼 카드 2개)
↓
Deep Dive (Feature Slider — 핵심 서비스 3개)
↓
Stay Updated (Highlights — 필터 가능한 뉴스 그리드)
↓
Convert (CTA Dark — 상담 예약하기)
↓
Follow (Follow Us — SNS 6개 이미지)
↓
Contact (Footer — 연락처, 운영 정보)
```

사용자는 이 흐름을 통해 브랜드 이해 → 서비스 이해 → 신뢰 형성 → 상담 문의 순서로 이동한다.

---

## 6. Layout Patterns

실제 구현된 반복 레이아웃 패턴이다.

### Full-Viewport Hero Layout

- 섹션: Hero
- 100vh/dvh 전체 화면
- 배경 이미지 슬라이드 + 오버레이
- 텍스트 중앙 정렬 (데스크탑), 하단 정렬 (모바일)

### 3-Column Grid Layout

- 섹션: How It Works, Follow Us (6컬럼)
- `grid-template-columns: repeat(3, 1fr)`
- 데스크탑 다중 컬럼 → 모바일 단일 컬럼 전환

### 2-Column Grid Layout

- 섹션: Magazine, Footer mid
- `grid-template-columns: 1fr 1fr`
- 모바일에서 단일 컬럼으로 전환

### Center-Stack Accordion Layout

- 섹션: Services
- `max-width: 720px`, `margin: 0 auto`
- 아코디언 단일 항목 열림

### Full-Bleed Band Layout

- 섹션: Trust Band, CTA Dark
- 전체 너비, 별도 배경색
- 내부 콘텐츠 중앙 정렬

### Horizontal Draggable Slider Layout

- 섹션: Feature Slider
- 슬라이드 너비 `min(860px, 86vw)`
- 드래그 인터랙션 + 도트 네비게이션

### Card Grid with Filter Layout

- 섹션: Highlights / News
- 필터 탭 + `grid-template-columns: repeat(3, 1fr)`
- 1080px 이하: 2컬럼, 600px 이하: 1컬럼

---

## 7. Component Patterns

실제 구현에서 반복 사용되는 컴포넌트이다.

### Hero

- 구성: 배경 슬라이드 3장 + 오버레이 + h1 + 설명 문구 + 슬라이드 카운터 + 스크롤 인디케이터
- 자동 재생 6초 간격 (setInterval)
- 터치 스와이프 지원

### Step Card (How It Works)

- 구성: 아이콘(SVG, 72px 원형) + 스텝 번호 + 제목 + 설명
- 데스크탑: 아이콘 상단 배치, 텍스트 좌측 정렬
- 모바일: 번호 원형 + 텍스트 2열 그리드로 전환

### Accordion (Services)

- 구성: 버튼 헤더 + +/× 아이콘 + 본문 (max-height 트랜지션)
- 한 번에 하나만 열림
- 열린 항목: 헤더 배경 `--accent-dark`, 흰색 텍스트

### Why Journey Grid (Why Us)

- 구성: 5-col 아이콘 카드 (`why-journey__icons`, `grid-template-columns: repeat(5, 1fr)`)
- 각 카드: SVG 아이콘 원형 + 제목 + 서브타이틀 + 설명 텍스트
- 모바일: 1열 세로 스택 전환 (`≤ 760px`), `border-top` 구분선

### Trust Logo Band

- 구성: 설명 텍스트 + 가로 정렬 로고 3개 (KHIDI, 보건복지부, SGI)
- 배경: `--bg-black`, 로고: 흰색 원본 이미지

### Editorial Image Card (Magazine)

- 구성: 배경 이미지 + 그라디언트 오버레이 + 레이블 + 제목 + 태그 칩
- 최소 높이 520px
- 호버 시 이미지 scale(1.06) 줌인

### Feature Slide

- 구성: 이미지 (47:25 비율) + 2열 캡션 (kicker + 제목 | 설명 + link-arrow)
- 드래그/포인터 이벤트 처리
- 첫 번째/마지막 슬라이드에서 과도한 드래그 방지 (10% 클램프)

### News Card (Highlights)

- 구성: 이미지 (16:11) + 카테고리 + 날짜 + 제목
- 호버 시 이미지 scale(1.05)
- 제목 2줄 말줄임 (-webkit-line-clamp: 2)

### CTA Section

- 구성: h2 제목 + 설명 문구 + 버튼 (중앙 정렬)
- 배경: `linear-gradient(135deg, var(--violet-900) 0%, var(--violet-800) 35%, var(--violet-600) 70%, var(--violet-500) 100%)`
- 모바일에서 버튼 숨김 (`.cta-dark .btn { display: none }`) — 모바일 하단바로 대체

### Social Grid Card (Follow Us)

- 구성: 배경 이미지 + 호버 오버레이 + 해시태그 텍스트
- aspect-ratio: 4/5
- 6컬럼 → 3컬럼 (1080px) → 2컬럼 (600px)

### GNB Overlay

- 구성: 브랜드 + 로그인/회원가입 + 닫기 버튼 + 5열 메뉴 (소개 · 서비스 · 쇼핑 · 스페이스 · 소식) + 하단 배너 2종 (휴그로센터 · 퍼스널 스킨 솔루션) · 다크 테마 (gray-950)
- 열림: `translateY(-100%)` → `translateY(0)` 트랜지션
- 반응형: 5열 (>1080px) → 2열 (≤1080px) → 단일 열 아코디언 (≤860px)

### Mobile Bottom Bar (v1)

- 구성: 홈 · 상담예약 · 쇼핑 · 이벤트 · 마이 5개 버튼
- 배경: `--violet-800`
- `border-radius: 8px`, 하단 고정 (bottom: 16px, 좌우 14px 여백)

---

## 8. Visual Experience

실제 구현 코드 기준 사용자가 느끼는 경험이다.

### Premium

- 대형 타이포그래피: Hero h1은 104px (데스크탑)
- 여백 중심: 섹션 패딩 `clamp(64px, 9vw, 132px)`
- 절제된 색상: 기본 흰색/서피스 배경, 강조색 최소화

### Hospitality

- 언어: "전담 코디네이터", "1:1로 설계", "안심 케어" 등 컨시어지 표현
- 섹션 설명 문구가 안심과 케어를 강조
- 운영 시간 정보 (연중무휴 09:00–21:00) 를 footer에 명시

### Editorial

- Eyebrow 레이블 + 대형 헤딩 조합이 모든 섹션에 반복
- 이미지 카드 그라디언트 오버레이 + 레이블/제목 하단 배치
- link-arrow 하단 언더라인 애니메이션

### Trust

- 인증 기관 로고 3개 (KHIDI, 보건복지부, SGI) 전면 배치
- 공식 사업자 정보 footer에 명시 (등록번호, 주소, 대표자)
- Why Journey Grid: 5가지 전문성 아이콘 카드로 차별점 명시

---

## 9. Responsive Behavior

실제 코드에서 사용 중인 breakpoint 기준으로 작성한다.

### Container

- `.wrap` → `max-width: 1920px` (`--maxw`), `padding: 0 clamp(16px, 1.6vw, 34px)` (`--gutter`)
- 모든 섹션 콘텐츠는 `.wrap`으로 정렬

### Breakpoint 표

| 구분         | 기준 width | 적용 내용                                                                                                                                                                                                          | 관련 CSS 위치                                                                 |
| ------------ | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Desktop      |   > 1080px | GNB 수평 노출, 뉴스 3열, Follow 6열, Footer mid 3열, 헤더 유틸리티바 표시, 헤더 투명→스크롤 solid, `--header-h: 92px`                                                                                              | `css/theme.css :root`, `css/common.css` + `css/home.css` 기본값                     |
| Tablet       |   ≤ 1080px | GNB 숨김 (`display:none`), 뉴스 2열 + 3번째 이후 숨김, Follow 3열, Footer mid 2열, GNB overlay 5열 → 2열                                                                                                           | `css/common.css` (GNB·Footer), `css/home.css` (뉴스·Follow)                         |
| Mobile       |    ≤ 860px | `--header-h: 70px`, 헤더 항상 흰색, 유틸리티바 숨김, CTA버튼 숨김, Hero 하단 정렬, HIW 3열→1열 + 아이콘 숫자 원형 대체, Footer mid 1열, 모바일 하단바 표시, GNB overlay 아코디언, Feature caption 1열 | `css/common.css` (Header·GNB·Mobile Bar), `css/home.css` (Hero·HIW·Feature) |
| Why Journey  |    ≤ 760px | `.why-journey__icons { grid-template-columns: 1fr }` — 5-col → 1열 세로 스택                                                                                                                                       | `css/home.css @media (max-width: 760px)`                                     |
| Small Mobile |    ≤ 600px | 뉴스 1열 + 2개까지만 노출, Follow 3열, booking 1열, Feature title/desc 축소                                                                                                                                        | `css/common.css` (Footer·Trust), `css/home.css` (뉴스·booking·Feature·CTA)          |

### 추가 capability query

| query                             | 적용 내용                                           | 관련 CSS 위치              |
| --------------------------------- | --------------------------------------------------- | -------------------------- |
| `@media (hover: hover)`           | `.gnb-col a:hover` 언더라인 활성화                  | `css/common.css` (GNB)     |
| `@media (prefers-reduced-motion)` | `[data-reveal]` 트랜지션 비활성화 (opacity 1, none) | `css/common.css` (Reveal)  |

### 주요 전환 지점 요약

| 항목                      | 전환 기준          | 변경 내용                                       |
| ------------------------- | ------------------ | ----------------------------------------------- |
| GNB → 모바일 메뉴         | ≤ 1080px           | GNB 숨김, 햄버거 버튼 + GNB Overlay 사용        |
| 뉴스 그리드 3열 → 2열     | ≤ 1080px           | `repeat(3,1fr)` → `repeat(2,1fr)`, 3번째+ 숨김  |
| Follow 6열 → 3열 → 3열    | ≤ 1080px → ≤ 600px | 6 → 3 → 3 (gap만 축소)                          |
| Hero 중앙 → 하단          | ≤ 860px            | `justify-content: flex-end`, 오버레이 방향 반전 |
| HIW 3열 → 1열             | ≤ 860px            | `grid-template-columns: 1fr`, 아이콘 → 숫자원형 |
| Why Journey 5열 → 1열     | ≤ 760px            | `grid-template-columns: 1fr`                    |
| 모바일 하단바 표시        | ≤ 860px            | `display: flex` (고정 플로팅 바)                |
| CTA Dark 버튼 숨김        | ≤ 860px            | `display: none` (하단바로 대체)                 |
| 뉴스 2열 → 1열            | ≤ 600px            | `grid-template-columns: 1fr`, 2개까지만 노출    |
| Feature caption 2열 → 1열 | ≤ 860px            | `grid-template-columns: 1fr`                    |
| 섹션 상단 패딩 고정       | ≤ 860px            | `padding-top: 85px` (clamp 대신 고정값 적용)    |

---

## 10. Mobile Behavior

### 헤더

- 유틸리티 바 숨김 (`display: none`)
- CTA 버튼 숨김, 햄버거 메뉴 + 언어 변경 아이콘만 노출
- 투명 → 흰색 전환 없이 항상 흰색 유지 (`background: var(--bg-white)`)
- 로고 아래 "Premium Concierge in Seoul" 서브타이틀 표시 (`brand-sub-mobile`)

### Hero

- 콘텐츠 하단 정렬 (`justify-content: flex-end`)
- 제목: `clamp(32px, 5.2vw, 32px)` (고정 소형)
- 슬라이드 카운터: static 배치 (절대 위치 해제)
- "SCROLL" 인디케이터: static 배치, 10px 소형
- 오버레이: 상단 투명 → 하단 88% 불투명 (그라디언트 방향 반전)

### 네비게이션

- GNB: 5열 → 단일 열 아코디언 (h4 클릭으로 패널 열림)
- GNB 하단: 프리미엄 스페이스 배너 (검정 배경) 추가 노출
- 언어 선택: 드롭다운 → 하단 바텀 시트 (`.lang-sheet`)
- 하단 바: 플로팅 바 (홈 · 상담예약 · 쇼핑 · 이벤트 · 마이)

### 콘텐츠 흐름

- How It Works: 3컬럼 → 단일 열, 아이콘 숨김 → 번호 원형으로 대체
- Services: 아코디언 폰트 크기 축소, 패딩 감소
- Why Us: 5-col 아이콘 그리드 → 단일 열 세로 스택 (≤ 760px)
- Magazine: 2컬럼 → 단일 열
- Feature: 2열 캡션 → 단일 열
- Highlights: 3컬럼 → 2컬럼 (1080px) → 1컬럼 (600px), 3개까지만 노출
- CTA Dark: 버튼 숨김 (모바일 하단바로 예약 유도)
- Follow Us: 6컬럼 → 3컬럼 → 2컬럼

### CTA 위치

- 데스크탑: 헤더 우측 "상담 예약하기" 버튼 + CTA Dark 섹션 버튼
- 모바일: 하단 바 중앙 예약 아이콘 버튼 (항상 노출)

### 정보 밀도

- 섹션 상단 패딩 85px 고정
- 섹션 헤드 margin-bottom 32px로 축소
- 불필요한 보조 요소(채팅버튼, util bar) 숨김

---

## 11. Reuse Guidelines

신규 페이지(About, Beauty, Medical, Travel) 제작 시 재사용 가능한 규칙이다.

### 공통 구조 (전 페이지 동일 유지)

- Header (2단: utility bar + main nav)
- GNB Overlay (5컬럼 메뉴 구조)
- Mobile Bottom Bar (v1 구조)
- Language Bottom Sheet
- Footer
- Scroll Reveal 애니메이션 (`data-reveal`)

### 재사용 가능한 섹션 패턴

- **Eyebrow + 대형 헤딩** 조합: 모든 섹션 헤드에 사용
- **Trust Band**: 서비스 신뢰가 필요한 페이지에 재사용
- **CTA Dark**: 각 페이지 하단 전환 유도에 재사용
- **Feature Slider**: 서비스 특징 설명이 필요한 페이지에 재사용
- **News Card Grid**: 콘텐츠 나열이 필요한 페이지에 재사용
- **Editorial Image Card**: 서비스 카테고리 진입점에 재사용
- **Why Journey Grid**: 서비스 강점 · 전문성 항목을 아이콘 카드로 나열할 때 재사용

### 섹션 순서 원칙

1. 브랜드/카테고리 소개 (Hero 또는 Page Hero)
2. 프로세스 또는 서비스 소개
3. 신뢰 형성 요소
4. 상세 콘텐츠
5. CTA Dark

---

## 12. Do Not Change

신규 페이지 제작 시 반드시 유지해야 하는 요소이다.

### 구조 유지

- Header 2단 구조 (utility bar + main nav)
- GNB Overlay 5컬럼 (소개 / 서비스 / 쇼핑 / 스페이스 / 소식)
- Mobile Bottom Bar gray-950 플로팅 바
- Language Bottom Sheet 구조
- Footer 3단 구조 (top links / mid info / bottom copyright+social)

### 인터랙션 유지

- 헤더 투명 → 스크롤 60px 이후 solid 전환 (`is-solid`)
- Scroll Reveal: `data-reveal` 트리거, `opacity 0 → 1`, `translateY(34px) → 0`
- 섹션 내 `data-reveal="2"`, `"3"` 딜레이 (0.1s, 0.2s)

### 타이포그래피 계층 유지

- Eyebrow: uppercase, `var(--text-caption)`, 중앙 정렬
- 섹션 헤딩: `.display.h-lg` (80px 데스크탑, clamp 32–60px 모바일)
- 본문: `var(--text-body)`, line-height 1.7–1.95

### CTA 패턴 유지

- Primary CTA: `btn--primary` (채워진 버튼)
- Secondary CTA: `btn` (아웃라인 버튼)
- link-arrow: 하단 언더라인 + 화살표 이동 애니메이션
- 모바일 CTA: 하단 바로 항상 노출

### 브랜드 표현 유지

- 브랜드명: `KMEDITOUR`
- 서브타이틀: `Premium Concierge in Seoul`
- SNS 계정: `@kmeditour`
- 연락처/운영 정보: footer에 명시

### 반응형 기준 유지

- 실제 사용 중인 breakpoint 4개만 사용: 1080px, 860px, 760px(why-journey 1열 전환), 600px
- 신규 breakpoint 추가 금지
- 모바일(≤ 860px) 하단바 gray-950 유지
- 섹션 패딩: Desktop `clamp(64px, 9vw, 132px)`, Mobile `padding-top: 85px`
