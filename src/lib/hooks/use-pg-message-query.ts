import { fetchPgMessage } from "@/db/client-queries/fetch-pg-message";
import { QKey } from "@/db/keys";
import { useQuery } from "@tanstack/react-query";

export const usePgMessageQuery = () => {
  const {
    data: pgMessage,
    isPending,
    refetch,
  } = useQuery({
    queryKey: [QKey.fetchPgMessage],
    queryFn: fetchPgMessage,
    gcTime: 0,
  });

  return { pgMessage, isPending, refetch };
};
