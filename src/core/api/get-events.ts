import { AXIOS_INSTANCE } from "../constants/AxiosInstance";
import { type IEventQueryParams, type IEventResponse } from "../types/event";

export async function getEvents(params: IEventQueryParams, signal?: AbortSignal): Promise<IEventResponse> {
  const response = await AXIOS_INSTANCE.get('events', {params, signal});
  return response.data;
}