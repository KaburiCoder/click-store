import { QKey } from "@/db/keys";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export function useSelectDataChanged(isSuccess: boolean) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      queryClient.removeQueries({ queryKey: [QKey.fetchGetAdminProducts] });
      toast.success("변경되었습니다.");
    }
  }, [isSuccess, queryClient]);
}
