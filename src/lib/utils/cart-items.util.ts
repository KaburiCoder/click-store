import { CartItem } from "@/db/models/cart-item";

export class CartItemsUtil {
  private cartItems?: CartItem[];

  setCartItems(cartItems?: CartItem[]) {
    this.cartItems = cartItems;
  }

  public get cartItemIds(): number[] {
    return this.cartItems?.map((ci) => ci.id!) || [];
  }
  public get totalQuantity(): number {
    const totalQuantity = this.cartItems?.reduce(
      (quantity: number, ci: CartItem) => {
        quantity += ci.quantity;
        return quantity;
      },
      0,
    );
    return totalQuantity ?? 0;
  }

  public get totalPrice(): number {
    const totalPrice = this.cartItems?.reduce((price: number, ci: CartItem) => {
      price += ci.pls?.danga! * ci.quantity;
      return price;
    }, 0);
    return totalPrice ?? 0;
  }

  public get orderName(): string {
    const orderNames = this.cartItems?.map((ci) => {
      const productName = ci.pls?.smMyung;
      const fitText = ci.fit ? "[맞춤]" : "";
      const count = ci.quantity > 1 ? `*${ci.quantity}` : "";
      return `${productName}${fitText}${count}`;
    });
    return orderNames?.join(", ") ?? "";
  }

  public get paymentState() {
    return {
      cartItems: this.cartItems!,
      orderName: this.orderName,
      totalPrice: this.totalPrice,
      totalQuantity: this.totalQuantity,
    };
  }

  public get hasData() {
    return !!this.cartItems;
  }
}
