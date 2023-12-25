import { promisify } from "util";
import * as zlib from "zlib";

export default class ZipUtil {
  static async decompress(buffer: Buffer) {
    const gunzipAsync = promisify(zlib.gunzip);
    return await gunzipAsync(buffer);
  }
}
