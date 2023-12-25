import React from "react";
import styles from "./lb-input.module.scss";
import { ScriptProps } from "next/script";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const LbInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, ...inputProps } = props;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        ref={ref}
        id={"lbInput" + props.name}
        type="text"
        className="cst-lg-input"
        {...inputProps}
      />
    </div>
  );
});

LbInput.displayName = "LbInput";

export default LbInput;
