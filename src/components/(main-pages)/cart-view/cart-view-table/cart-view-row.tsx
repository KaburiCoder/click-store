"use client";
import React from "react";
import { CartItem } from "@/db/models/cart-item";
import IntUpAndDown from "@/components/(shared)/int-up-and-down";
import { defaultProductQuantity } from "@/lib/utils/product.util";
import { useCartView } from "@/lib/hooks/use-cart-view";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/shadcn.util";
import ButtonL from "@/components/ui/custom/button-l";

interface Props {
  cartItem: CartItem;
  checked: boolean;
}

const CartViewRow: React.FC<Props> = (props) => {
  const ci = props.cartItem;
  const { loading, setCheck, updateQuantity, deleteCartItem } = useCartView({
    id: ci.id,
  });
  const totalPrice = ci.quantity * (ci.pls?.danga ?? 0);
  const step = ci.pl?.step ?? 1;

  function checkChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setCheck(ci.id!, event.target.checked);
  }

  function handleCancel(): void {
    deleteCartItem();
  }

  function handleQuantityChange(value: number): void {
    updateQuantity(value);
  }

  const groupStyles = "flex flex-1 items-center justify-between py-2.5";

  return (
    <tr className="border-b border-solid border-blue-400" key={ci.id}>
      <td className="text-center">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={checkChangeHandler}
        />
      </td>
      <td colSpan={2}>
        <div className="flex flex-col">
          <div
            className={cn(groupStyles, "border-b border-solid border-blue-200")}
          >
            <div className="flex flex-col">
              <div className="text-xl font-bold text-black">
                {ci.pls?.smMyung}
              </div>
              <div className="flex gap-1 pt-1">
                {ci.fit && <Badge variant={"fit"}>맞춤주문</Badge>}
                {ci.pls?.danwi && (
                  <Badge variant={"default"}>{ci.pls?.danwi}</Badge>
                )}
              </div>
            </div>
          </div>
          <div className={groupStyles}>
            <div
              className={cn(
                "flex flex-col items-start gap-2",
                "xs:flex-row xs:items-center",
              )}
            >
              <div className="mr-1 min-w-[5rem] pb-2 text-right">
                {ci.pls?.danga?.toLocaleString()}원
              </div>
              <IntUpAndDown
                value={ci.quantity}
                step={step}
                min={defaultProductQuantity({ isFit: ci.fit, step })}
                disabled={loading}
                onChange={handleQuantityChange}
              />
            </div>

            <ButtonL
              className="p-2"
              variant="destructive"
              isLoading={loading}
              onClick={handleCancel}
            >
              취소
            </ButtonL>
          </div>
        </div>
      </td>
      <td className="text-center text-black">
        <div>{totalPrice.toLocaleString()}원</div>
      </td>
    </tr>
  );
};

export default CartViewRow;
