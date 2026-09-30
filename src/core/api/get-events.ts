import { AXIOS_INSTANCE } from "../constants/AxiosInstance";
import { responseDelay } from "../helpers/response-delay";
import { type IEventQueryParams, type IEventResponse } from "../types/event";

export async function getEvents(params: IEventQueryParams, signal?: AbortSignal): Promise<IEventResponse> {
  return responseDelay(await AXIOS_INSTANCE.get('events', {params, signal}));
}