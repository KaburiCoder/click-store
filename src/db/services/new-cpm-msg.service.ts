"use server";

import dayjs from "dayjs";
import db from "../db";

interface SendMessageArgs {
  recUser: string;
  msg: string;
}

export async function sendCpmMessage({ recUser, msg }: SendMessageArgs) {
  return db.newCpmMsg.create({
    data: {
      chk: "0",
      recUser,
      recDate: "",
      msg,
      senUser: "",
      senDate: dayjs().format("YYYYMMDDHHmmss"),
      show: "",
      dc: false,
      dcUser: "",
      dcDate: "",
      etc1: "",
    },
  });
}
