"use client";
import { useRouter } from "next/navigation";

export default function WrongApproach() {
  const { back } = useRouter();

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="shadow p-4 text-center">
        <h2 className="text-2xl text-red-800">잘못된 접근입니다.</h2>
        <button
          className="mt-2 p-2 w-full rounded text-white bg-red-500 hover:bg-red-600"
          onClick={back}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
