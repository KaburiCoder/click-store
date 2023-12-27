import ErrorText from "@/components/(shared)/error-text";
import SelectL from "@/components/ui/custom/select-l";
import fetchGetManagers from "@/db/client-queries/fetch-get-managers";
import { QKey } from "@/db/keys";
import { updateSeller } from "@/db/services/product.service";
import { useSelectDataChanged } from "@/lib/hooks/(admin)/orders/use-select-data-changed";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  productAuto: number;
  seller: string;
}

export default function DeliverySenderSelect({ productAuto, seller }: Props) {
  const { error, isPending, mutate, isSuccess } = useMutation({
    mutationFn: updateSeller,
  });
  const { data } = useQuery({
    queryKey: [QKey.fetchGetManagers],
    queryFn: fetchGetManagers,
  });
  useSelectDataChanged(isSuccess);

  const sendersObject = data?.reduce((acc: { [key: string]: string }, em) => {
    acc[em.code] = em.name;

    return acc;
  }, {});
  if (sendersObject) sendersObject["선택안함"] = "선택안함";

  function handleValueChanged(value: string): void {
    mutate({ productAuto, seller: value === "선택안함" ? "" : value });
  }

  return (
    <>
      <SelectL
        selectLabel="-- 배송자 --"
        object={sendersObject}
        value={seller}
        disabled={isPending}
        onValueChanged={handleValueChanged}
      />
      <ErrorText errorMessage={error?.message} />
    </>
  );
}
