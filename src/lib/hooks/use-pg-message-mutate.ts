import { QKey } from "@/db/keys";
import { deletePgMessage, savePgMessage } from "@/db/services/pg-msg.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const usePgMessageMutate = ({ onMutate }: { onMutate: () => void }) => {
  const queryClient = useQueryClient();
  const {
    mutate: saveMutate,
    data: saveResult,
    isPending: isSavePending,
  } = useMutation({
    mutationFn: savePgMessage,
  });
  const {
    mutate: deleteMutate,
    data: deleteResult,
    isPending: isDeletePending,
  } = useMutation({
    mutationFn: deletePgMessage,
  });

  useEffect(() => {
    if (saveResult?.status === "success") {
      toast.success("저장되었습니다.");
      onMutate();
    }
  }, [saveResult]);

  useEffect(() => {
    if (deleteResult?.status === "success") {
      toast.success("삭제되었습니다.");
      onMutate();
    }
  }, [deleteResult]);

  return {
    isPending: isSavePending || isDeletePending,
    saveMutate,
    deleteMutate,
  };
};
