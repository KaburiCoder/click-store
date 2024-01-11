"use client";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
}
const IntUpAndDown: React.FC<Props> = ({
  value,
  onChange,
  disabled,
  min = 0,
  max = 999,
  step = 1,
}) => {
  function handleChange(value: number) {
    if (disabled) return;
    if (value < min || value > max) {
      return;
    }

    onChange(value);
  }

  const iconStyles = cn(
    "p-2 text-blue-500",
    "hover:cursor-pointer hover:text-blue-900",
  );

  return (
    <div className="flex items-center overflow-hidden rounded-2xl border border-solid border-blue-400 bg-white px-1 text-gray-900">
      <div
        className={iconStyles}
        onClick={handleChange.bind(null, value - step)}
      >
        <FaMinus></FaMinus>
      </div>
      <div className="p-2 font-bold text-blue-900">{value}</div>
      <div
        className={iconStyles}
        onClick={handleChange.bind(null, value + step)}
      >
        <FaPlus></FaPlus>
      </div>
    </div>
  );
};

export default IntUpAndDown;
