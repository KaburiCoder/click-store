"use client";
import Modal from "@/components/(shared)/modal/modal";
import { ModalProps } from "@/lib/props/modal.props";
import React, { useEffect, useState } from "react";
import CustomLi from "./custom-li/custom-li";
import styles from "./product-modal.module.scss";
import { Products } from "@/db/queries/main-page.query";
import IntUpAndDown from "@/components/(shared)/int-up-and-down/int-up-and-down";
import CheckBox from "@/components/(shared)/check-box/check-box";
import MTitle from "@/components/(shared)/m-title/m-title";
import { toast } from "react-toastify";
import useCartStore from "@/store/cart.store";
import { useRouter } from "next/navigation";
import { paths } from "@/paths";
import * as cartService from "@/db/services/cart.service";
import ServiceInfo from "./service-info/service-info";
import Drawer from "@/components/(shared)/drawer/drawer";

interface Props extends ModalProps {
  product: Products;
  defaultFit: boolean;
}
export default function ProductModal(props: Props) {
  const { product } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {
    fitChecked,
    handleFitChange,
    minCount,
    open,
    setOpen,
    quantity,
    setQuantity,
    saveCart,
  } = useProductModal(props);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    saveCart();
  }

  async function handleAddAndToCart() {
    saveCart({ toCartView: true });
  }

  function handleClose(): void {
    setOpen(false);
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <MTitle title="주문하기" className={styles.title} />
        <div className={styles.body}>
          <ul>
            <CustomLi title="주문명칭" text={product.smMyung} />
            <CustomLi title="단위" text={product.danwi} />
            <CustomLi title="금액" text={product.danga?.toLocaleString()} />
            <CustomLi title="수량">
              <IntUpAndDown
                value={quantity}
                step={product.step}
                min={minCount}
                onChange={setQuantity}
              />
            </CustomLi>
            <CustomLi
              title="총 금액"
              text={(quantity * product.danga).toLocaleString()}
            />
            {product.fit && (
              <CheckBox
                className={styles.fit_checkbox}
                text="맞춤주문"
                checked={fitChecked}
                onChange={handleFitChange}
              />
            )}
          </ul>
        </div>
        <div className={styles.footer}>
          <button
            className={styles["add-and-to-cart-button"]}
            type="button"
            onClick={handleAddAndToCart}
          >
            장바구니
            <br />
            바로가기
          </button>
          <button className={styles["to-cart-button"]} type="submit">
            장바구니
            <br />
            담기
          </button>
          <button
            className={styles["cancel-button"]}
            type="button"
            onClick={handleClose}
          >
            취소
          </button>
        </div>
      </form>
      <div
        className={styles.service_info}
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        서비스 안내
      </div>
      <Drawer
        anchor="bottom"
        overflow="auto"
        zIndex={10000}
        open={drawerOpen}
        setOpen={setDrawerOpen}
      >
        <ServiceInfo />
      </Drawer>
    </Modal>
  );
}

const useProductModal = ({ open, setOpen, product, defaultFit }: Props) => {
  const [quantity, setQuantity] = useState(product.step);
  const [fitChecked, setFitChecked] = useState<boolean>(false);
  const { push } = useRouter();
  const toggleItemsCountChanged = useCartStore(
    (state) => state.toggleItemsCountChanged,
  );

  const minCount = fitChecked ? 6 : product.step;

  useEffect(() => {
    setFitChecked(defaultFit);
  }, [defaultFit]);

  useEffect(() => {
    setQuantity(minCount);
  }, [fitChecked, minCount]);

  function handleFitChange(): void {
    setFitChecked((prevFit) => !prevFit);
  }

  function saveCart({ toCartView }: { toCartView?: boolean } = {}) {
    cartService
      .saveCart({
        code: product.smCode,
        fit: fitChecked,
        quantity,
      })
      .then((_) => {
        toggleItemsCountChanged();
        setOpen(false);
        if (toCartView) {
          push(paths.cartView());
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return {
    fitChecked,
    minCount,
    open,
    setOpen,
    quantity,
    setQuantity,
    handleFitChange,
    saveCart,
  };
};
