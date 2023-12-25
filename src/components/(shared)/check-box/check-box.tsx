import React, { ChangeEventHandler } from "react";
import styles from "./check-box.module.scss";
import classNames from "classnames";

interface CheckBoxProps {
  text?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <div className={classNames(styles.checkbox, props.className)}>
      <input
        id="checkbox"
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor="checkbox">{props.text}</label>
    </div>
  );
};

export default CheckBox;
