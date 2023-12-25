import SettingsHeader from "@/components/(settings)/header/header";
import SettingsSide from "@/components/(settings)/side/side";
import Hero from "@/components/(shared)/hero";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: Props) {
  return (
    <Hero leftComponent={<SettingsSide />} headerComponent={<SettingsHeader />}>
      {children}
    </Hero>
  );
}
