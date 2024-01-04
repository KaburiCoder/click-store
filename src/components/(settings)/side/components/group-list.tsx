"use client";
import SideGroupItem, {
  ISideGroup,
} from "@/components/(shared)/side/side-group-item";
import { paths } from "@/paths";
import React from "react";
import { BiUser } from "react-icons/bi";

const groups: ISideGroup[] = [
  {
    groupName: "계정설정",
    links: [
      {
        Icon: BiUser,
        path: paths.settingsProfile(),
        name: "프로필",
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
