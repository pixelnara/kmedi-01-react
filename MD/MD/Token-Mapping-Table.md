# Token Mapping Table

현재 메인 페이지(index.html + css/reset.css · css/common.css · css/home.css · css/about.css · css/center.css)에서 실제 사용 중인 모든 토큰의 완전한 매핑표입니다.

> **기준**: Semantic First — primitive를 디자인 판단 기준으로 보지 않습니다.
> **최종 업데이트 2026-06-18**: Why-Us 개편 반영. Active Semantic **28개**, Direct Primitive **4건**.

---

## Semantic Token Complete Map

| Semantic Token | Primitive | Actual Value | Used | Component / Usage | 비고 |
|---------------|-----------|-------------|------|------------------|-----|
| `--bg-white` | `--white` | #ffffff | ✓ | body, header, card, acc open, footer | 흰색 배경 기본 |
| `--bg-gray` | `--gray-150` | #e4e6ec | ✓ | accordion item 배경 | |
| `--bg-dark` | `--gray-950` | #101219 | ✓ | trust section, gnb-banner, top-btn hover | 다크 배경 |
| `--surface-gray-1` | `--gray-50` | #f2f4f8 | ✓ | section surface, booking tab, lang-option hover | |
| `--surface-gray-2` | `--gray-200` | #dcdfe5 | ✓ | compare__col 일반 컬럼 배경 | |
| `--surface-gray-3` | `--brown-50` | #f7f4f2 | ✓ | center map-card 배경 (웜 크림) | brown 기반 |
| `--text-gray-1` | `--gray-300` | #b8bdc7 | ✓ | 플레이스홀더, 비활성 아이콘 | |
| `--text-gray-2` | `--gray-400` | #949aa8 | ✓ | 날짜, sub-head, lang-sheet title, hiw prefix | |
| `--text-gray-3` | `--gray-500` | #6b7180 | ✓ | 본문 기본 (body, lead, desc, list) | 최다 사용 |
| `--text-gray-4` | `--gray-600` | #515767 | ✓ | filter chip 기본, footer top links | |
| `--text-gray-5` | `--gray-700` | #3d4352 | ✓ | 폼 레이블 (login modal), why-journey icon desc | |
| `--text-gray-6` | `--gray-900` | #1a1e28 | ✓ | 헤딩 전반, link-arrow, btn outline, gnb, compare title | 최다 사용 |
| `--text-gray-7` | `--gray-950` | #101219 | ✓ | 최강 강조 — 모바일 헤더, login modal 제목 | |
| `--text-white` | `--white` | #ffffff | ✓ | 다크/컬러 배경 위 흰색 — hero, trust, cta-dark, hiw | |
| `--text-caption` | `--violet-500` | #3b33d9 | ✓ | eyebrow, kicker, bk-label, booking tab underline | accent-mid와 동일값 |
| `--rating` | `--amber-400` | #d9ad3f | ✓ | 별점 (review__star, treat-card__en) | |
| `--border-gray-1` | `--gray-200` | #dcdfe5 | ✓ | 기본 구분선 (card, feature, gnb, hiw-grid) | 최다 사용 |
| `--border-gray-2` | `--gray-300` | #b8bdc7 | ✓ | 연한 구분선 (mobile gnb) | |
| `--border-gray-3` | `--gray-400` | #949aa8 | ✓ | 중간 구분선 (footer top/bottom) | |
| `--border-gray-4` | `--gray-800` | #292e3d | ✓ | 강조 보더 (cnav-btn, filter chip) | |
| `--btn-primary` | `--gray-950` | #101219 | ✓ | btn--solid, btn--primary bg, filter.is-active | |
| `--btn-secondary` | `--violet-600` | #2e26b5 | ✓ | btn--primary:hover 배경 | |
| `--accent-mid` | `--violet-500` | #3b33d9 | ✓ | feature dots active, stay-card tags bg, services acc-icon | text-caption과 동일값 |
| `--accent-dark1` | `--violet-700` | #2a2287 | ✓ | services acc open head, btn--primary2, hiw icon, proc-sheet, about btn | |
| `--accent-dark2` | `--violet-800` | #1f1957 | ✓ | compare__col--ours bg, footer__bottom, btn--primary2:hover | |
| `--accent-gradient` | violet-900→500 | gradient | ✓ | cta-dark 섹션 전체 배경 | |
| `--btn-kakao` | `--kakao-yellow` | #fee500 | ✓ | login-modal Kakao 버튼 배경 | 소셜 전용 |
| `--btn-kakao-text` | `--kakao-dark` | #191919 | ✓ | login-modal Kakao 버튼 텍스트 | 소셜 전용 |

**Total: 28개**

---

## Primitive → Semantic 연결 상태

| Primitive | Value | → Semantic | Direct CSS | 비고 |
|-----------|-------|-----------|-----------|-----|
| `--white` | #ffffff | `--bg-white`, `--text-white` | — | |
| `--gray-50` | #f2f4f8 | `--surface-gray-1` | — | |
| `--gray-150` | #e4e6ec | `--bg-gray` | — | |
| `--gray-200` | #dcdfe5 | `--border-gray-1`, `--surface-gray-2` | — | 이중 매핑 |
| `--gray-300` | #b8bdc7 | `--border-gray-2`, `--text-gray-1` | — | 이중 매핑 |
| `--gray-400` | #949aa8 | `--border-gray-3`, `--text-gray-2` | — | 이중 매핑 |
| `--gray-500` | #6b7180 | `--text-gray-3` | — | |
| `--gray-600` | #515767 | `--text-gray-4` | — | |
| `--gray-700` | #3d4352 | `--text-gray-5` | — | |
| `--gray-800` | #292e3d | `--border-gray-4` | — | |
| `--gray-900` | #1a1e28 | `--text-gray-6` | — | |
| `--gray-950` | #101219 | `--bg-dark`, `--btn-primary`, `--text-gray-7` | — | 삼중 매핑 |
| `--brown-50` | #f7f4f2 | `--surface-gray-3` | — | |
| `--brown-100`~`--brown-900` | — | — | — | Palette (미사용) |
| `--violet-50`~`--violet-200` | — | — | — | Palette |
| `--violet-300` | #8681e4 | — | about.css (직접) | accent-light 삭제 후 직접 참조 |
| `--violet-400` | #6861e0 | — | — | Palette |
| `--violet-500` | #3b33d9 | `--text-caption`, `--accent-mid` | — | 이중 매핑 |
| `--violet-600` | #2e26b5 | `--btn-secondary` | home.css (직접) | why-journey icon wrap bg + sub color |
| `--violet-700` | #2a2287 | `--accent-dark1` | — | |
| `--violet-800` | #1f1957 | `--accent-dark2` | — | |
| `--violet-900` | #151132 | `--accent-gradient` (내부) | — | |
| `--amber-400` | #d9ad3f | `--rating` | — | |
| `--amber-100`~`--amber-900` | — | — | — | Palette (`--amber-400` 외 미사용) |
| `--gold-600` | #9b7943 | — | home.css (직접) | text-gold 삭제 후 직접 참조 |
| `--gold-500`, `--gold-700~800` | — | — | — | Palette |
| `--kakao-yellow` | #fee500 | `--btn-kakao` | — | |
| `--kakao-dark` | #191919 | `--btn-kakao-text` | — | |

---

## Direct Primitive Usage (의도적)

semantic 없이 CSS 파일에서 primitive를 직접 참조하는 항목. 삭제된 semantic의 자리.

| Primitive | 파일 | Selector | 사유 |
|-----------|-----|---------|-----|
| `--violet-300` | about.css | `.guarantee-col__icon` | `--accent-light` 삭제 후 직접 유지 |
| `--gold-600` | home.css | `.treat-highlight` | `--text-gold` 삭제 후 직접 유지 |
| `--violet-600` | home.css | `.why-journey__icon-wrap` | why-journey 아이콘 원 배경 — `--btn-secondary`와 동일값이나 의미 불일치 |
| `--violet-600` | home.css | `.why-journey__icon-sub` | why-journey 서브타이틀 컬러 — `--btn-secondary`와 동일값이나 의미 불일치 |

**Direct CSS 건수: 4건** (의도적, 관리 대상)

---

## Deleted Tokens (이 세션 정리)

| 삭제된 Semantic | 이유 | 대체 |
|--------------|-----|-----|
| `--text-heading` | → `--text-gray-6`으로 번호형 통합 | `--text-gray-6` |
| `--text-body` | → `--text-gray-3` | `--text-gray-3` |
| `--text-body2` | → `--text-gray-4` | `--text-gray-4` |
| `--text-body3` | `--text-heading`과 동일값(gray-900) → 중복 | `--text-gray-6` |
| `--text-subtle` | → `--text-gray-2` | `--text-gray-2` |
| `--text-subtle2` | `--text-heading`과 동일값(gray-900) → 중복 | `--text-gray-6` |
| `--text-strong` | → `--text-gray-7` | `--text-gray-7` |
| `--text-label` | → `--text-gray-5` | `--text-gray-5` |
| `--text-placeholder` | → `--text-gray-1` | `--text-gray-1` |
| `--text-inverse` | → `--text-white` | `--text-white` |
| `--text-gold` | 저사용(1건) · niche | `--gold-600` 직접 참조 |
| `--text-link` | `--text-caption`과 동일값(violet-500) → 중복 | `--text-caption` |
| `--border` | → `--border-gray-1` | `--border-gray-1` |
| `--border-2` | → `--border-gray-4` | `--border-gray-4` |
| `--border-light` | → `--border-gray-2` | `--border-gray-2` |
| `--border-medium` | → `--border-gray-3` | `--border-gray-3` |
| `--border-warm` | 저사용(0건) · 삭제 | — |
| `--surface` | → `--surface-gray-1` | `--surface-gray-1` |
| `--surface-alt` | → `--bg-gray` | `--bg-gray` |
| `--surface-strong` | → `--surface-gray-2` | `--surface-gray-2` |
| `--surface-warm` | → `--surface-gray-3` | `--surface-gray-3` |
| `--surface-white` | → `--bg-white` | `--bg-white` |
| `--surface-dark` | → `--bg-dark` | `--bg-dark` |
| `--bg-black` | → `--bg-dark` | `--bg-dark` |
| `--btn` | → `--btn-primary` | `--btn-primary` |
| `--accent` | 0건 · 미사용 | — |
| `--accent-light` | 1건 · 저사용 | `--violet-300` 직접 참조 |
| `--accent-dark` | → `--accent-dark1` | `--accent-dark1` |
| `--accent-hover` | → `--btn-secondary` (Button 카테고리) | `--btn-secondary` |
| `--accent-deep` | → `--accent-dark2` | `--accent-dark2` |

---

## Hard-coded Values (의도된 값 · 토큰화 불필요)

| 값 | 위치 | 용도 |
|---|-----|-----|
| `rgba(0,0,0,0.4)` | hero overlay 데스크탑 | 이미지 위 오버레이 |
| `rgba(255,255,255,0.92)` | hero desc | 반투명 텍스트 |
| `rgba(0,0,0,0.45)` | hero counter | 슬라이드 카운터 bg |
| `rgba(255,255,255,0.78)` | compare ours / trust body | 다크 bg 위 반투명 |
| `linear-gradient(rgba...)` | stay-card, mem-card, follow-card | 이미지 그라디언트 오버레이 |
| `rgba(0,0,0,0.14)` | mobile-bar shadow | 하단 바 그림자 |
| `29px`, `14.5px`, `13.5px` | brand, col-card, footer | 특수 px 폰트 (수동 검토 필요) |

---

## Summary

| 항목 | 수치 |
|-----|-----|
| Active Semantic Tokens | **28개** |
| — Background | 3 (bg-white, bg-gray, bg-dark) |
| — Surface | 3 (surface-gray-1~3) |
| — Text | 10 (text-gray-1~7, text-white, text-caption, rating) |
| — Border | 4 (border-gray-1~4) |
| — Button | 2 (btn-primary, btn-cta) |
| — Accent | 4 (accent-mid, dark1, dark2, gradient) |
| — Social | 2 (btn-kakao, btn-kakao-text) |
| Direct Primitive Usage | **4건** (violet-300 · gold-600 · violet-600×2 · 의도적) |
| Hard-coded rgba | ~20건 (의도된 투명도 · 유지) |
| Deleted this session | 30건 |

---

**변경 이력:**

- **2026-06-18 (Violet 전환)**: Blue scale 제거. Accent violet 통일.
- **2026-06-18 (Token Audit 완료)**: Semantic 36개로 확장. Direct primitive 0건.
- **2026-06-18 (Token Cleanup)**: 중복/저사용 30개 삭제. 번호형 명명 체계 전환. Background/Surface 분리. Button 카테고리 신설. **Active Semantic 28개, Direct 2건.**
- **2026-06-18 (Why-Us 개편)**: why-acc 아코디언 제거 → 5-col 카드 그리드. `--violet-600` direct 2건 추가 (icon-wrap, icon-sub). `--text-gray-5` 사용처 +1. **Direct 4건.**
- **2026-06-18 (reset.css 신설)**: 브라우저 리셋 분리. 중복 제거: `box-sizing: border-box` (login-modal__input), `list-style: none` + `margin: 0` (proc-sheet__list), `list-style: none` + `padding: 0` + `margin: 0` (why-journey__icons).
