import type { Metadata } from "next";
import "./global.css";
import "@/css/index";
import Providers from "@/providers/providers";
import { natoSansKR } from "@/fonts/fonts";
import ToastWrapper from "@/components/(shared)/toast-wrapper/toast-wrapper";
import { imgPaths } from "@/paths";

export const metadata: Metadata = {
  metadataBase: new URL(`http://${process.env.NEXT_PUBLIC_CLICK_DOMAIN}`),
  title: "클릭스토어 - 클릭소프트(물품 접수)",
  description: "클릭소프트 물품 구매 웹 사이트입니다.",
  icons: {
    icon: imgPaths.clickIcon,
  },
  openGraph: {
    title: "클릭스토어 - 클릭소프트(물품 접수)",
  },
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
