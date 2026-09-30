import { useCallback, useEffect, useState } from "react";
import type { EventStatusResponse } from "../types/event";
import { getEventStatuses } from "../api/get-event-statuses";
import axios from "axios";

export default function useEventsStatuses() {
  const [data, setData] = useState<EventStatusResponse>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refetchCount, setRefetchCount] = useState(0);
  const refetch = useCallback(() => setRefetchCount(refetchCount + 1), [refetchCount]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const controller = new AbortController();

    getEventStatuses(controller.signal)
    .then(statuses => setData(statuses))
    .catch(error => {
      if (axios.isCancel(error)) {
        return;
      }

      setIsError(true);
    })
    .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [refetchCount]);

  return {data, isError, isLoading, refetch};
}