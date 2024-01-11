import React from "react";

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
    <div className="mb-2 flex flex-col">
      <label htmlFor={label} className="mb-1 text-sm text-gray-600">
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
