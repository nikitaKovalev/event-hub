import { useCallback, useEffect, useState } from "react";
import type { EventTypeResponse } from "../types/event";
import axios from "axios";
import { getEventTypes } from "../api/get-event-types";

export default function useEventsTypes() {
  const [data, setData] = useState<EventTypeResponse>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refetchCount, setRefetchCount] = useState(0);
  const refetch = useCallback(() => setRefetchCount(refetchCount + 1), [refetchCount]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const controller = new AbortController();

    getEventTypes(controller.signal)
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