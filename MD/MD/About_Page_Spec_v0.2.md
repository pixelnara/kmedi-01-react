# 06_About_Page_Spec_v0.2.md

# About Page Specification

---

# 1. Page Overview

## Page Name

About K-Medi Tour

---

## Page Purpose

K-Medi Tour의 브랜드 철학과 존재 이유를 소개한다.

사용자가 K-Medi Tour를 단순 의료 예약 서비스가 아닌

의료 · 뷰티 · 여행 경험을 연결하는

Premium Concierge in Korea

브랜드로 이해하도록 만든다.

---

## Primary Goal

- 브랜드 신뢰 형성
- 브랜드 철학 전달
- 브랜드 차별성 설명

---

## Secondary Goal

- 컨시어지 서비스 이해
- 한국 의료관광 경쟁력 이해
- 상담 문의 전환

---

# 2. Design Direction

About 페이지는 Main Page의 디자인 언어를 계승한다.

계승 대상

- Typography
- Color System
- Design Tokens
- Component Language
- Editorial Style
- Hospitality Mood
- Visual Rhythm
- Responsive Behavior

---

중요

About 페이지는 Main Page의 브랜드 경험을 계승한다.

그러나 Main Page의

- 섹션 순서
- 콘텐츠 흐름
- 정보 구조
- 페이지 구성

을 복제하지 않는다.

About 페이지는 독립적인 페이지로 설계한다.

---

# 3. User Questions

사용자는 About 페이지에서 아래 질문에 대한 답을 얻어야 한다.

- K-Medi Tour는 무엇인가?
- 왜 존재하는가?
- 무엇을 중요하게 생각하는가?
- 무엇이 다른가?
- 왜 신뢰할 수 있는가?
- 고객에게 어떤 경험을 제공하는가?

---

# 4. Content Strategy

브랜드 소개를 우선한다.

서비스 소개는 보조 역할이다.

정보 전달 흐름

Who We Are

↓

Why We Exist

↓

What We Believe

↓

How We Serve

↓

Why Korea

↓

Consultation

---

# 5. Information Architecture

About 페이지의 구조는

IA 문서를 Source of Truth로 사용한다.

페이지 구조

섹션 순서

콘텐츠 계층

정보 흐름

은 IA를 기준으로 한다.

---

중요

IA 문서의

About-IA 시트를 우선 사용한다.

페이지 생성 전 반드시 확인한다.

About_Page_Spec은

콘텐츠 방향을 정의하는 문서이다.

페이지 구조는 IA를 우선한다.

---

# 6. Brand Experience Goals

사용자는 About 페이지를 탐색하면서

아래 브랜드 경험을 느껴야 한다.

Trust

↓

Understanding

↓

Confidence

↓

Consultation

---

사용자가 느껴야 할 인상

- Premium
- Hospitality
- Trust
- Care
- Guidance
- Editorial Luxury

---

# 7. Responsive Requirement

About 페이지는

Main Page의 반응형 구조를 계승한다.

지원 환경

- Desktop
- Tablet
- Mobile

계승 대상

- breakpoint
- media query
- layout transition
- mobile behavior

새로운 breakpoint를 임의 생성하지 않는다.

---

# 8. Design Rules

## 유지

- Premium Mood
- Hospitality Experience
- Editorial Style
- Design System Consistency
- Mobile Experience Quality
- Information Density
- Visual Rhythm

---

## 변경 가능

- 섹션 순서
- 콘텐츠 흐름
- 정보 구조
- 레이아웃 구성

---

## 금지

- Main Page 복제
- 동일한 섹션 구조 사용
- 병원 홍보 브로셔 스타일
- 공격적 CTA
- 과도한 의료 광고
- 여행사 랜딩페이지 스타일

---

# 9. References

우선순위

1. MASTER_CONTEXT.md
2. IA (About-IA Sheet)
3. Current-Design-System.md
4. Main_Page_Reference_Analysis.md
5. About_Page_Spec.md

---

## Main_Page_Reference_Analysis.md 역할

Main_Page_Reference_Analysis.md는

UX 기준 문서가 아니다.

Main Page에 구현된

- 브랜드 경험
- 비주얼 무드
- 에디토리얼 스타일
- 정보 밀도
- 이미지 사용 방식
- 컴포넌트 활용 방식

을 분석한 문서이다.

신규 페이지는

Main Page의 구조를 복제하지 않는다.

동일한 브랜드가 만든 페이지처럼 느껴져야 한다.

---

## Layout Reference

https://k-medi-tour.vercel.app/about

참고용 레이아웃

주의사항

- 복제 금지
- 구조 기준으로 사용 금지
- 브랜드 무드 참고용
- 실제 구조는 IA를 따른다.

---

# 10. Success Criteria

사용자는 About 페이지 탐색 후

- K-Medi Tour가 무엇인지
- 왜 존재하는지
- 어떤 철학을 가지고 있는지
- 왜 신뢰할 수 있는지
- 어떤 경험을 제공하는지

를 이해해야 한다.

최종적으로 자연스럽게 상담 문의 CTA로 연결되어야 한다.

---

# 11. Important Note

About 페이지는

Main Page에서 파생된 페이지이다.

그러나 Main Page의 축소판이 아니다.

동일한 브랜드가 만든 독립적인 페이지처럼 보여야 한다.

페이지 구조는 IA를 따른다.

콘텐츠 방향은 About_Page_Spec을 따른다.

디자인은 Current-Design-System을 따른다.

브랜드 경험은 Main_Page_Reference_Analysis를 따른다.
