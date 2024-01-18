"use client";
import SideGroupItem, {
  ISideGroup,
} from "@/components/(shared)/side/side-group-item";
import { paths } from "@/paths";
import React from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { AiTwotoneShopping } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

const groups: ISideGroup[] = [
  {
    groupName: "물품 주문",
    links: [
      {
        Icon: MdContentPasteSearch,
        path: paths.adminOrders(),
        name: "주문내역",
      },
      {
        Icon: MdContentPasteSearch,
        path: paths.adminWebOrders(),
        name: "웹 주문내역",
      },
    ],
  },
  {
    groupName: "결제 설정",
    links: [
      {
        Icon: MdPayment,
        path: paths.adminSettingsPayment(),
        name: "PG결제 메세지",
      },
    ],
  },
  {
    groupName: "메인 화면",
    links: [
      {
        Icon: AiTwotoneShopping,
        path: paths.root(),
        name: "물품 구매",
      },
    ],
  },
];

export default function GroupList({ onClose }: DrawerChildProps) {
  const groupComponents = groups.map((group) => {
    return (
      <SideGroupItem key={group.groupName} group={group} onClose={onClose} />
    );
  });

  return groupComponents;
}
