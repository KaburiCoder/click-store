"use client";
import MenuButton from "@/components/(shared)/menu-button";
import { paths } from "@/paths";
import { usePathname } from "next/navigation";
import AdminSide from "../side/admin-side";

export default function AdminHeader() {
  return (
    <div className="relative flex h-full items-center justify-between px-2">
      <div></div>
      <Title />
      <div>{/* <MenuButton /> */}</div>
    </div>
  );
}

function getTitle(pathname: string) {
  switch (pathname) {
    case paths.adminOrders():
      return "물품 주문 내역";
    case paths.adminWebOrders():
      return "웹 주문 내역";
    case paths.adminSettingsPayment():
      return "PG결제 메세지 설정";
  }
}

function Title() {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <div className="relative flex h-full w-full items-center justify-between px-2">
      <div></div>
      <h2 className="absolute left-1/2 top-1/2 flex h-full w-auto -translate-x-1/2 -translate-y-1/2 transform items-center py-1">
        {title}
      </h2>
      <MenuButton drawerChild={AdminSide} />
    </div>
  );
}
