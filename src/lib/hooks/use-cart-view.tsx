import {
  deleteCartItems,
  updateCartItemQuantity,
} from "@/db/services/cart-item.service";
import { getCartWithProduct } from "@/db/services/cart.service";
import useCartViewStore from "@/store/cart-view.store";
import useCartStore from "@/store/cart.store";
import { useCallback, useEffect, useState } from "react";
import { getOrderId } from "../utils/toss-pg.util";
import { CartItemsUtil } from "../utils/cart-items.util";
import { toast } from "react-toastify";
import { paymentBNPLAction } from "@/db/client-actions/payment-bnpl.action";
import { PaymentItem } from "@/db/models/payment-item";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import { useFetchPayment } from "./use-fetch-payment";

interface Props {
  onFetch?: boolean;
  isPayment?: boolean;
  id?: number;
}

const useCartView = ({ onFetch, isPayment, id }: Props) => {
  const {
    loading,
    cart,
    checkedIds,
    setCart,
    setCheck,
    setLoading,
    checkBNPL,
    setCheckBNPL,
    setCheckAll,
    selectedCartItems,
    setSelectedCartItems,
  } = useCartViewStore();
  const { toggleItemsCountChanged } = useCartStore();
  const { error: fetchBNPLPaymentError, fetchBNPLPayment } = useFetchPayment();
  const [hasNotPaymentData, setHasNotPaymentData] = useState<boolean>();
  const [cartItemsUtil] = useState<CartItemsUtil | undefined>(
    isPayment ? new CartItemsUtil() : undefined,
  );

  // Cart View 데이터 로드
  const fetch = useCallback(async () => {
    try {
      const cart = await getCartWithProduct();
      setCart(cart);
      toggleItemsCountChanged();
    } catch (err) {
      console.log(err);
    }
  }, [setCart, toggleItemsCountChanged]);

  // 로딩 바 호출을 위한 콜백 메서드
  const loadingWrapper = useCallback(
    (asyncCallback: () => Promise<void>) => {
      setLoading(true);
      asyncCallback().then(() => {
        setLoading(false);
      });
    },
    [setLoading],
  );

  // 카트 아이템 삭제
  async function deleteCartItem() {
    if (!id) return;

    loadingWrapper(async () => {
      await deleteCartItems([id]);
      await fetch();
    });
  }

  // 카트 아이템 수량 변경
  async function updateQuantity(quantity: number) {
    if (!id) return;

    loadingWrapper(async () => {
      await updateCartItemQuantity(id, quantity);
      await fetch();
    });
  }

  function getPaymentItems(): PaymentItem[] {
    return selectedCartItems!.map((ci) => ({
      paymentId: 0,
      code: ci.pls?.smCode!,
      name: ci.pls?.smMyung!,
      fit: ci.fit,
      quantity: ci.quantity,
      amount: ci.pls?.danga!,
    }));
  }

  async function fetchPayment({
    paymentType,
    method,
    sendType,
  }: {
    paymentType: string;
    method: string;
    sendType: string;
  }) {
    if (!selectedCartItems) return;

    setLoading(true);
    const orderId = getOrderId();
    fetchBNPLPayment({
      paymentType,
      orderId,
      paymentKey: orderId,
      orderName: cartItemsUtil?.orderName!,
      amount: cartItemsUtil?.totalPrice!,
      quantity: cartItemsUtil?.totalQuantity!,
      method,
      sendType,
      requestedAt: new Date(),
      approvedAt: null,
      paymentItems: getPaymentItems(),
      cartItemIds: selectedCartItems.map((ci) => ci.id!),
    }).catch((err) => {
      toast.error(err.message);
      setLoading(false);
    }); //성공 시 navigate됨
  }

  // fetchPayment 에러 시 발생
  useEffect(() => {
    if (!fetchBNPLPaymentError) return;

    toast.error(fetchBNPLPaymentError);
  }, [fetchBNPLPaymentError]);

  // onFetch인 경우 최초 조회
  useEffect(() => {
    if (!onFetch) return;
    loadingWrapper(async () => {
      await fetch();
      await setCheckAll(true);
    });
  }, [loadingWrapper, fetch, setCheckAll, onFetch]);

  // buyArea인 경우 체크된 카트 아이템 리스트 변경
  useEffect(() => {
    if (!isPayment) return;

    const selectedCartItems = cart?.cartItems?.filter((ci) =>
      checkedIds.includes(ci.id!),
    );
    setSelectedCartItems(selectedCartItems);
    cartItemsUtil?.setCartItems(selectedCartItems);
  }, [cart, cartItemsUtil, checkedIds, isPayment, setSelectedCartItems]);

  // 결제 페이지 정상접근인지 확인
  useEffect(() => {
    if (!isPayment || !cartItemsUtil) return;

    if (!cartItemsUtil?.hasData) {
      setHasNotPaymentData(true);
    }
  }, [isPayment, cartItemsUtil]);

  return {
    cart,
    loading,
    selectedCartItems,
    hasNotPaymentData,
    fetch,
    deleteCartItem,
    updateQuantity,
    setCheck,
    checkBNPL,
    setCheckBNPL,
    cartItemsUtil,
    fetchPayment,
    getPaymentItems,
  };
};

export { useCartView };
