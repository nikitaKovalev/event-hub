import Button from "../../../core/components/Button/Button";
import "./EventsCard.css"

export default function EventsCard() {
  return (
    <article className="event-card">
      <div className="event-card__main">
        <div className="event-card__header">
          <div>
            <div className="event-card__type">Meetup</div>

            <h2 className="event-card__title">
              React Warsaw Meetup
            </h2>
          </div>

          <span className="status status--published">
            Published
          </span>
        </div>

        <p className="event-card__description">
          Meetup about modern React development, performance and
          frontend architecture.
        </p>

        <div className="event-card__details">
          <div className="event-card__detail">
            <span className="event-card__detail-icon">◷</span>

            <div>
              <span className="event-card__detail-label">Date</span>
              <span className="event-card__detail-value">
                Oct 5, 2026 · 18:00 – 21:00
              </span>
            </div>
          </div>

          <div className="event-card__detail">
            <span className="event-card__detail-icon">⌖</span>

            <div>
              <span className="event-card__detail-label">Location</span>
              <span className="event-card__detail-value">
                Warsaw, Poland
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
                3 / 80
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer className="event-card__footer">
        <a href="/events/1" className="button button--secondary">
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