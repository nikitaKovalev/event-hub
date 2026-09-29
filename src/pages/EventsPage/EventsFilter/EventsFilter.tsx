import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import "./EventsFilter.css";

export default function EventsFilter() {
  return (
    <section className="events-filter">
      <div className="events-filter__search">
        <span className="events-filter__search-icon">⌕</span>

        <Input
          type="text"
          placeholder="Search events..."
        />
      </div>

      <Select defaultValue="">
        <option value="">All types</option>
        <option value="conference">Conference</option>
        <option value="meetup">Meetup</option>
        <option value="workshop">Workshop</option>
        <option value="webinar">Webinar</option>
      </Select>

      <Select defaultValue="">
        <option value="">All statuses</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
        <option value="cancelled">Cancelled</option>
      </Select>
    </section>
  );
}