"use client";
import { paths } from "@/paths";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  return (
    <div className="relative flex h-full items-center justify-between px-2">
      <div></div>
      <Title />
      <div>{/* <MenuButton /> */}</div>
    </div>
  );
}

function Title() {
  const pathname = usePathname();
  let title: string = "";

  switch (pathname) {
    case paths.adminOrders():
      title = "물품 주문 내역";
      break;
    case paths.adminWebOrders():
      title = "웹 주문 내역";
      break;
  }

  return (
    <h2 className="absolute left-1/2 top-1/2 flex h-full w-auto -translate-x-1/2 -translate-y-1/2 transform items-center py-1">
      {title}
    </h2>
  );
}
