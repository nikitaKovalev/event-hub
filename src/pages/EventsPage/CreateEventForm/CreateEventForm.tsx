import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import "./CreateEventForm.css";

export default function CreateEventForm() {
  return (
    <form className="event-form">
      <div className="event-form__field">
        <label className="event-form__label" htmlFor="title">
          Event title
          <span className="event-form__required">*</span>
        </label>

        <Input
          id="title"
          name="title"
          type="text"
          placeholder="e.g. React Warsaw Meetup"
        />
      </div>

      <div className="event-form__field">
        <label className="event-form__label" htmlFor="description">
          Description
          <span className="event-form__required">*</span>
        </label>

        <textarea
          className="event-form__textarea"
          id="description"
          name="description"
          placeholder="Tell attendees what this event is about..."
          rows={4}
        />

        <span className="event-form__hint">
          Keep the description short and informative.
        </span>
      </div>

      <div className="event-form__row">
        <div className="event-form__field">
          <label className="event-form__label" htmlFor="type">
            Event type
            <span className="event-form__required">*</span>
          </label>

          <Select
            id="type"
            name="type"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>

            <option value="conference">Conference</option>
            <option value="meetup">Meetup</option>
            <option value="workshop">Workshop</option>
            <option value="webinar">Webinar</option>
          </Select>
        </div>

        <div className="event-form__field">
          <label className="event-form__label" htmlFor="status">
            Status
            <span className="event-form__required">*</span>
          </label>

          <Select
            id="status"
            name="status"
            defaultValue="draft"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="cancelled">Cancelled</option>
          </Select>
        </div>
      </div>

      <div className="event-form__divider" />

      <div className="event-form__section">
        <div className="event-form__section-header">
          <h3 className="event-form__section-title">Date & time</h3>

          <p className="event-form__section-description">
            Choose when the event starts and ends.
          </p>
        </div>

        <div className="event-form__row">
          <div className="event-form__field">
            <label className="event-form__label" htmlFor="startDate">
              Starts
              <span className="event-form__required">*</span>
            </label>

            <Input
              className="event-form__input"
              id="startDate"
              name="startDate"
              type="datetime-local"
            />
          </div>

          <div className="event-form__field">
            <label className="event-form__label" htmlFor="endDate">
              Ends
              <span className="event-form__required">*</span>
            </label>

            <Input
              id="endDate"
              name="endDate"
              type="datetime-local"
            />
          </div>
        </div>
      </div>

      <div className="event-form__divider" />

      <div className="event-form__section">
        <div className="event-form__section-header">
          <h3 className="event-form__section-title">Event details</h3>

          <p className="event-form__section-description">
            Add location and attendee capacity.
          </p>
        </div>

        <div className="event-form__row event-form__row--location">
          <div className="event-form__field">
            <label className="event-form__label" htmlFor="location">
              Location
              <span className="event-form__required">*</span>
            </label>

            <Input
              className="event-form__input"
              id="location"
              name="location"
              type="text"
              placeholder="e.g. Warsaw, Poland"
            />
          </div>

          <div className="event-form__field">
            <label className="event-form__label" htmlFor="capacity">
              Capacity
              <span className="event-form__required">*</span>
            </label>

            <Input
              className="event-form__input"
              id="capacity"
              name="capacity"
              type="number"
              min="1"
              placeholder="100"
            />
          </div>
        </div>
      </div>

      <footer className="event-form__actions">
        <button
          className="event-form__button event-form__button--secondary"
          type="button"
        >
          Cancel
        </button>

        <button
          className="event-form__button event-form__button--primary"
          type="submit"
        >
          Create event
        </button>
      </footer>
    </form>
  );
}