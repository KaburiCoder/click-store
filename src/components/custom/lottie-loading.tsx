import React from "react";
import Lottie from "react-lottie-player";
import LoadingAnimation from "@/public/lotties/loading-animation.json";
import { ClassNameProps } from "@/lib/props/class-name.props";

export function LottieLoading({ className }: ClassNameProps) {
  return <Lottie className={className} animationData={LoadingAnimation} play />;
}
