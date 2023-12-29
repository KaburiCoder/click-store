import { Session } from "next-auth";
import { User } from "../interfaces/user";

export function convertSessionToUser(session: Session | null) {
  if (!session?.user) return;
  const user: User = JSON.parse(session.user.id);
  user.email = session.user.email!;
  return user as User;
}
