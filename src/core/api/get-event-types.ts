import { AXIOS_INSTANCE } from "../constants/AxiosInstance";
import { responseDelay } from "../helpers/response-delay";
import type { EventTypeResponse } from "../types/event";

export async function getEventTypes(signal: AbortSignal): Promise<EventTypeResponse> {
  return responseDelay(await AXIOS_INSTANCE.get('eventTypes', {signal}));
}