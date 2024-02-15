import React from "react";
import MainHeader from "@/components/(main-pages)/root/header/main-header";
import MainFooter from "@/components/(main-pages)/root/main-footer";
import { ChildrenProps } from "@/lib/props/children.props";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <div className="flex h-full flex-col">
        <MainHeader />
        <main className="flex-1 pt-[calc(var(--header-height)+var(--main-nav-height))]">
          {children}
          <MainFooter />
        </main>
      </div>
    </>
  );
}
