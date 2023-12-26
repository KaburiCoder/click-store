import LabelWrapper from "@/components/ui/custom/label-wrapper";
import React from "react";
import SideLinkItem, { ISideLink } from "./side-link-item";

interface GroupItemProps {
  group: ISideGroup;
}

export interface ISideGroup {
  groupName: string;
  links: ISideLink[];
}

export default function SideGroupItem({ group }: GroupItemProps) {
  const linkComponents = group.links.map((link) => {
    return <SideLinkItem key={link.path} link={link} />;
  });

  return (
    <LabelWrapper
      className="pb-4"
      labelClassName="py-2 pl-0 text-md text-gray-500"
      wrapperClassName="flex flex-col gap-2 w-full"
      key={group.groupName}
      label={group.groupName}
    >
      {linkComponents}
    </LabelWrapper>
  );
}
