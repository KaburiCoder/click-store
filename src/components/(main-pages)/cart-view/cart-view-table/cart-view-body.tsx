"use client";
import { CartItem } from "@/db/models/cart-item";
import useCartViewStore from "@/store/cart-view.store";
import CartViewRow from "./cart-view-row";
import { Cart } from "@/db/models/cart";

const CartViewBody = () => {
  // const { updateQuantity, deleteCartItemById } = useCartView();
  const { cart, checkedIds, setCheck } = useCartViewStore();
  // function onCancelHandler(id: number): void {
  //   deleteCartItemById(id);
  // }

  // function countChangeHandler(cartItemId: number, quantity: number) {
  //   updateQuantity({ cartItemId, quantity });
  // }

  // function checkChangeHandler(id: number, checked: boolean) {
  //   setCheck(id, checked);
  // }

  const itemComponents = cart?.cartItems?.map((ci: CartItem) => {
    return (
      <CartViewRow
        key={ci.id}
        cartItem={ci}
        checked={checkedIds.includes(ci.id!)}
        // onCheckChange={(checked) => checkChangeHandler(ci.id!, checked)}
        // onCancel={onCancelHandler}
        // onCountChange={countChangeHandler}
      />
    );
  });

  return <tbody>{itemComponents}</tbody>;
};

export default CartViewBody;
