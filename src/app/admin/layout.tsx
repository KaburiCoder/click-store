import AdminHeader from "@/components/(admin)/header/admin-header";
import AdminSide from "@/components/(admin)/side/admin-side";
import Hero from "@/components/(shared)/hero";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <Hero headerComponent={<AdminHeader />} leftComponent={<AdminSide />}>
      {children}
    </Hero>
  );
}
