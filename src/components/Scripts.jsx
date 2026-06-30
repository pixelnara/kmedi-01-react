"use client";

import { useEffect } from "react";

// 원본 사이트의 vanilla JS를 원래 순서대로 (문서 끝의 <script> 처럼) 순차 로드한다.
// 전역: image-slot(옵션) → app → contact-popup(문의 팝업) → 페이지 스크립트 → mobile-bar(모바일 하단바, 옵션)
export default function Scripts({
  pageScripts = [],
  hasMobileBar = false,
  hasImageSlot = false,
}) {
  useEffect(() => {
    const list = [];
    if (hasImageSlot) list.push("/js/image-slot.js");
    list.push("/js/app.js");
    list.push("/js/contact-popup.js");
    for (const s of pageScripts) list.push("/" + s);
    if (hasMobileBar) list.push("/js/mobile-bar.js");

    let cancelled = false;
    function loadSeq(i) {
      if (cancelled || i >= list.length) return;
      const src = list[i];
      if (document.querySelector('script[data-kmt="' + src + '"]')) {
        loadSeq(i + 1);
        return;
      }
      const el = document.createElement("script");
      el.src = src;
      el.async = false;
      el.dataset.kmt = src;
      el.onload = () => loadSeq(i + 1);
      el.onerror = () => loadSeq(i + 1);
      document.body.appendChild(el);
    }
    loadSeq(0);

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
