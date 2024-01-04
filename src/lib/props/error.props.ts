import { ErrorProps as NextErrorProps } from "next/error";

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
