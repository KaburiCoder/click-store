import classNames from "classnames";
import styles from "./page.module.scss";
import AccTitle from "@/components/(account-pages)/acc-title/acc-title";
import SignupForm from "@/components/(account-pages)/signup/signup-form";

interface Props {
  searchParams: {
    uid: string;
  };
}

export default function SignupPage({ searchParams: { uid } }: Props) {
  return (
    <>
      <AccTitle title="회원가입" />
      <SignupForm uid={uid} />
    </>
  );
}
