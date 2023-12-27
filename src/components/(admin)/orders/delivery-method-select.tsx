import ErrorText from "@/components/(shared)/error-text";
import SelectL from "@/components/ui/custom/select-l";
import { QKey } from "@/db/keys";
import { updateOrderCheck } from "@/db/services/product.service";
import { deliveryMethodData } from "@/lib/datas/delivery-method-data";
import { useSelectDataChanged } from "@/lib/hooks/(admin)/orders/use-select-data-changed";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  productAuto: number;
  orderCheck: string;
}

export default function DeliveryMethodSelect({
  productAuto,
  orderCheck,
}: Props) {
  const { error, isPending, mutate, isSuccess } = useMutation({
    mutationFn: updateOrderCheck,
  });
  useSelectDataChanged(isSuccess);

  function handleValueChanged(value: string): void {
    mutate({ productAuto, orderCheck: value === "-1" ? "" : value });
  }

  return (
    <>
      <SelectL
        selectLabel="-- 배송방법 선택 --"
        object={deliveryMethodData}
        value={orderCheck}
        disabled={isPending}
        onValueChanged={handleValueChanged}
      />
      <ErrorText errorMessage={error?.message} />
    </>
  );
}
