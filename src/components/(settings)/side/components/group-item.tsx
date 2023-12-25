"use client";
import LabelWrapper from "@/components/ui/custom/label-wrapper";
import { LinkItem } from "./link-item";
import { IGroup } from "./group-list";

interface GroupItemProps {
  group: IGroup;
}

export function GroupItem({ group }: GroupItemProps) {
  const linkComponents = group.links.map((link) => {
    return <LinkItem key={link.path} link={link} />;
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
