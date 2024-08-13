import React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  errorMessage: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ReceiptError({ errorMessage, setOpen }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-8 pt-2">
        <h3 className="text-xl">결제내역 확인서</h3>
        {setOpen && (
          <IoCloseOutline
            className="h-8 w-8 rounded text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            onClick={() => setOpen?.(false)}
          />
        )}
      </div>
      <span className="rounded bg-red-200 p-2 text-center text-base">
        {errorMessage}
      </span>
    </div>
  );
}
