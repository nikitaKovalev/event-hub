import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import "./EventsFilter.css";

interface EventsFilterProps {
  search: string;
  onSearchChange: (text: string) => void;
}

export default function EventsFilter({search, onSearchChange}: EventsFilterProps) {
  return (
    <section className="events-filter">
      <div className="events-filter__search">
        <span className="events-filter__search-icon">⌕</span>

        <Input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={event => onSearchChange(event.target.value.trim())}
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