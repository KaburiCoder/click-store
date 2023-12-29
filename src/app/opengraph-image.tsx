import { imgPaths } from "@/paths";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "클릭소프트 이미지";
export const size = {
  width: 800,
  height: 420,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // // Font
  // const interSemiBold = fetch(
  //   new URL("./Inter-SemiBold.ttf", import.meta.url),
  // ).then((res) => res.arrayBuffer());
  const imgUrl = `${process.env.NEXT_PUBLIC_CLICK_DOMAIN}${imgPaths.logo3}`;
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          backgroundImage: `url(http://${imgUrl})`, //{imgPaths.logo2}
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
    ),
    {
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    },
  );
}
