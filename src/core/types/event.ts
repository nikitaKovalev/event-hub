import type { ListResponse } from "./list-response";
import type { QueryConditions, QueryList } from "./query-params";

export type EventType =
  | "conference"
  | "meetup"
  | "workshop"
  | "webinar";

export type EventStatus =
  | "draft"
  | "published"
  | "cancelled";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  type: EventType;
  status: EventStatus;

  startDate: string;
  endDate: string;

  location: string;
  capacity: number;

  attendees: number[];

  createdAt: string;
  updatedAt: string;
}

export type IEventResponse = ListResponse<IEvent>;
export type IEventQueryParams = QueryList & QueryConditions<IEvent>;

export type CreateEvent = Omit<
  Event,
  "id" | "createdAt" | "updatedAt" | "attendees"
>;

export type UpdateEvent = Partial<CreateEvent>;