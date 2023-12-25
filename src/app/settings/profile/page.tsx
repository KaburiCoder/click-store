import SettingsBodyWrapper from "@/components/(settings)/body-wrapper";
import SettingsProfileBody from "@/components/(settings)/profile/settings-profile-body";
import React from "react";

export default function SettingsProfilePage() {
  return (
    <SettingsBodyWrapper
      title="프로필"
      description="비밀번호 변경 등 계정정보 관리화면"
    >
      <SettingsProfileBody />
    </SettingsBodyWrapper>
  );
}
