import React, { useEffect, useState } from "react";
import { getUser } from "../utils/user.util";
import { User } from "../interfaces/user";
import useSvrCookieStore from "@/store/svr-cookie.store";

export default function useSvrCookie() {
  const { cookieChanged } = useSvrCookieStore();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUser().then(setUser);
  }, [cookieChanged]);

  return {
    user,
  };
}
