import Link from "next/link";
import React from "react";

interface Props {
  links: {
    login?: boolean;
    findPassword?: boolean;
    signup?: boolean;
  };
}

export default function AuthNavi({
  links: { findPassword, login, signup },
}: Props) {
  return (
    <nav className="flex justify-evenly text-xs p-1 text-blue-800">
      {login && <NavLink href="/login">로그인</NavLink>}
      {signup && <NavLink href="/signup">회원가입</NavLink>}
      {findPassword && <NavLink href="/find-password">비밀번호 찾기</NavLink>}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="p-1 hover:underline">
      {children}
    </Link>
  );
}
