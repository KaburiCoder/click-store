"use client";
import SideGroupItem, {
  ISideGroup,
} from "@/components/(shared)/side/side-group-item";
import { paths } from "@/paths";
import React from "react";
import { MdContentPasteSearch } from "react-icons/md";

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
];

export default function GroupList() {
  const groupComponents = groups.map((group) => {
    return <SideGroupItem key={group.groupName} group={group} />;
  });

  return groupComponents;
}
