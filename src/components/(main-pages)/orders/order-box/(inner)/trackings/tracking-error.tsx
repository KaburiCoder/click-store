import React from "react";

interface Props {
  errorMessage: string;
}

export default function TrackingError({ errorMessage }: Props) {
  return (
    <div className="p-5">
      <h2 className="mb-4 text-center">운송장 번호 조회 실패</h2>
      <div className="mb-4 text-center text-rose-500">{errorMessage}</div>
      <ul className="space-y-2">
        <li>◈ 아직 배송 준비단계 중 일 수 있습니다.</li>
        <li>◈ 입력한 운송장번호가 유효하지 않을 수 있습니다.</li>
      </ul>
    </div>
  );
}
