import { AXIOS_INSTANCE } from "../constants/AxiosInstance";
import { responseDelay } from "../helpers/response-delay";
import type { EventStatusResponse } from "../types/event";

export async function getEventStatuses(signal: AbortSignal): Promise<EventStatusResponse> {
  return responseDelay(await AXIOS_INSTANCE.get('eventStatuses', {signal}));
}