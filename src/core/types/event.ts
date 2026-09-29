export type EventType =
  | "conference"
  | "meetup"
  | "workshop"
  | "webinar";

export type EventStatus =
  | "draft"
  | "published"
  | "cancelled";

export interface Event {
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

export type CreateEvent = Omit<
  Event,
  "id" | "createdAt" | "updatedAt" | "attendees"
>;

export type UpdateEvent = Partial<CreateEvent>;