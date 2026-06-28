import Page from '@/components/Page';
import fragment from '@/fragments/reservation';

export const metadata = {
  title: "상담 예약 — KMEDITOUR · 프리미엄 컨시어지 인 코리아",
  description: "KMEDITOUR 시술 상담 예약 — 원하는 시술을 선택하고 전담 코디네이터와 1:1 상담을 예약하세요.",
};

export default function ReservationPage() {
  return (
    <Page
      fragment={fragment}
      pageCss={["css/reservation.css"]}
      pageScripts={["js/reservation.js"]}
      hasMobileBar={true}
      hasImageSlot={true}
    />
  );
}
