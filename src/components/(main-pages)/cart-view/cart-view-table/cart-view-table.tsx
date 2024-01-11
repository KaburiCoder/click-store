import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function CartViewTable({ children }: Props) {
  return (
    <div className="flex justify-center">
      <table className="m-5 w-full max-w-[60rem] border-collapse">
        <caption className="pb-5 text-2xl text-black">장바구니 목록</caption>
        <colgroup>
          <col width={50} />
          <col span={2} width="*" />
          <col width={100} />
        </colgroup>

        {children}
      </table>
    </div>
  );
}
