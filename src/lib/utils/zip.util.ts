import { promisify } from "util";
import * as zlib from "zlib";

export default class ZipUtil {
  static async decompress(buffer: Buffer) {
    const gunzipAsync = promisify(zlib.gunzip);
    return await gunzipAsync(buffer);
  }

  static async compress(buffer: Buffer) {
    const gzip = promisify(zlib.gzip);
    const compressedBuffer = await gzip(buffer);
    return compressedBuffer;
  }

  static async decompressToString(compressedBuffer: Buffer) {
    const buffer = await ZipUtil.decompress(compressedBuffer);
    return buffer.toString("utf-8");
  }
}
