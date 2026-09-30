import { useCallback, useEffect, useState } from "react";
import { getEvents } from "../api/get-events";
import type { IEventQueryParams, IEventResponse } from "../types/event";
import axios from "axios";
import { buildQueryParams } from "../helpers/query-builder";

export default function useEvents(params: IEventQueryParams) {
  const [data, setData] = useState<IEventResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refetchCount, setRefetchCount] = useState(0);
  const refetch = useCallback(() => setRefetchCount(refetchCount + 1), [refetchCount]);
  const queryParams = buildQueryParams(params);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const controller = new AbortController();

    getEvents(queryParams, controller.signal)
      .then((response) => setData(response))
      .catch(error => {
        if (axios.isCancel(error)) {
          return;
        }
        setIsError(true);
      })
      .finally(() => setIsLoading(false))
    
    return () => controller.abort();
  }, [queryParams.toString(), refetchCount]);

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}