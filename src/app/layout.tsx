import type { Metadata } from "next";
import "@/css/index";
import Providers from "@/providers/providers";
import { natoSansKR } from "@/fonts/fonts";
import ToastWrapper from "@/components/(shared)/toast-wrapper/toast-wrapper";

export const metadata: Metadata = {
  title: "클릭스토어 - 클릭소프트(물품 접수)",
  description: "클릭소프트 물품 구매 웹 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={natoSansKR.className}>
        <Providers>
          <ToastWrapper />
          <div id="drawer-root"></div>
          <div id="backdrop-root"></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
