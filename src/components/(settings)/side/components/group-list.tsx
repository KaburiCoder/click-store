"use client";
import { paths } from "@/paths";
import React from "react";
import { IconType } from "react-icons";
import { BiUser } from "react-icons/bi";
import { GroupItem } from "./group-item";

const groups: IGroup[] = [
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

export interface ILink {
  Icon: IconType;
  path: string;
  name: string;
}

export interface IGroup {
  groupName: string;
  links: ILink[];
}

export default function GroupList() {
  const groupComponents = groups.map((group) => {
    return <GroupItem key={group.groupName} group={group} />;
  });

  return groupComponents;
}
