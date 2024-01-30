import { imgPaths } from "@/paths";

export class ImageUtil {
  static bufferToSrc(buffer: Buffer | undefined, extension: "png" = "png") {
    if (!buffer) return imgPaths.noImage;
    const imgBase64 = buffer.toString("base64");
    return `data:image/${extension};base64,${imgBase64}`;
  }
}
