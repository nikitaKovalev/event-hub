import Button from "../../../core/components/Button/Button";
import type { IEvent } from "../../../core/types/event";
import "./EventsCard.css"

export default function EventsCard({eventItem}: {eventItem: IEvent}) {
  return (
    <article className="event-card">
      <div className="event-card__main">
        <div className="event-card__header">
          <div>
            <div className="event-card__type">
              {eventItem.type}
            </div>

            <h2 className="event-card__title">
              {eventItem.title}
            </h2>
          </div>

          <span className={`status status--${eventItem.status}`}>
            {eventItem.status}
          </span>
        </div>

        <p className="event-card__description">
          {eventItem.description}
        </p>

        <div className="event-card__details">
          <div className="event-card__detail">
            <span className="event-card__detail-icon">◷</span>

            <div>
              <span className="event-card__detail-label">Date</span>
              <span className="event-card__detail-value">
                {new Date(eventItem.startDate).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="event-card__detail">
            <span className="event-card__detail-icon">⌖</span>

            <div>
              <span className="event-card__detail-label">Location</span>
              <span className="event-card__detail-value">
                {eventItem.location}
              </span>
            </div>
          </div>

          <div className="event-card__detail">
            <span className="event-card__detail-icon">♙</span>

            <div>
              <span className="event-card__detail-label">
                Attendees
              </span>
              <span className="event-card__detail-value">
                {eventItem.attendees.length} / {eventItem.capacity}
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer className="event-card__footer">
        <a href={`/events/${eventItem.id}`} className="button button--secondary">
          View details
        </a>

        <div className="event-card__actions">
          <Button variant="ghost">
            Edit
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </footer>
    </article>
  );
}