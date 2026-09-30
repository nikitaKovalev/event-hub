import type { AxiosResponse } from "axios";
import { DEBOUNCE_TIME } from "../constants/debounce-time"

function _responseDelay(): Promise<void> {
  return new Promise((resolve) => {
    const handler = setTimeout(() => resolve(), DEBOUNCE_TIME * 2);
    return () => clearTimeout(handler);
  });
}

export async function responseDelay<T>(response: AxiosResponse): Promise<T> {
  const delayedResponse = await Promise.all([
    response,
    _responseDelay(),
  ]);

  return delayedResponse[0].data;
}