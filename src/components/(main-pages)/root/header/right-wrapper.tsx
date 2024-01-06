import React from "react";
import DdUserButton from "./dd-user/dd-user-button";
import DdOrderButton from "./dd-order-button";
import DdCartButton from "./dd-cart/dd-cart-button";

export default function RightWrapper() {
  return (
    <div className="flex">
      <DdOrderButton onTheRight={true} />
      <DdUserButton />
      <DdCartButton />
    </div>
  );
}
