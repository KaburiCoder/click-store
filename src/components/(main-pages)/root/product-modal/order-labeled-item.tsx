import React from "react";

const OrderLabeledItem: React.FC<{
  title: string;
  text?: string;
  children?: any;
}> = (props) => {
  return (
    <div className="flex flex-1 items-center text-black">
      <span className="h-4 min-w-[5rem]">{props.title}</span>
      <span className="mb-1 mr-5">:</span>
      {props.text && <span className="font-bold">{props.text}</span>}
      {props.children && props.children}
    </div>
  );
};

export default OrderLabeledItem;
