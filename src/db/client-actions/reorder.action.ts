import { PaymentItem } from "../models/payment-item";
import { saveCart } from "../services/cart.service";

export async function reorderAction(paymentItems: PaymentItem[]) {
  for (const item of paymentItems) {
    // const result = await getPaymentItemCode({ variables: { id: item.id } });
    // const code = result.data?.getPaymentItemById?.code;
    // if (!code) continue;

    await saveCart({
      code: item.code,
      fit: item.fit,
      quantity: item.quantity,
    });
  }
}
