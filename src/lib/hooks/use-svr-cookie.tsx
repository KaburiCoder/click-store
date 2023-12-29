import { User } from "../interfaces/user";
import { useSession } from "next-auth/react";
import { convertSessionToUser } from "../utils/convert.util";

export default function useSvrCookie() {
  const { data: session, status } = useSession();
  let user: User | undefined;
  if (status === "authenticated") {
    user = convertSessionToUser(session);
  }

  return {
    user,
  };
}
