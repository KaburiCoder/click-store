"use client";
import TitleAndDesc from "@/components/(shared)/title-and-desc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LabelWrapper from "@/components/ui/custom/label-wrapper";
import useSvrCookie from "@/lib/hooks/use-svr-cookie";
import React from "react";
import ChangeEmailForm from "./change-email-form";
import ChangePasswordForm from "./change-password-form";

export default function SettingsProfileBody() {
  const { user } = useSvrCookie();

  return (
    <LabelWrapper
      label="계정정보"
      labelClassName="text-md p-0 mb-3 text-gray-600"
    >
      <Accordion type="multiple" className="w-full rounded bg-white px-4 py-2">
        <AccordionItem
          value="item-1"
          className="border-b border-solid border-gray-300"
        >
          <AccordionTrigger>
            <TitleAndDesc title="이메일 주소 변경" description={user?.email} />
          </AccordionTrigger>
          <AccordionContent>
            <ChangeEmailForm />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <TitleAndDesc title="비밀번호 변경" description="비밀번호 변경" />
          </AccordionTrigger>
          <AccordionContent>
            <ChangePasswordForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LabelWrapper>
  );
}
