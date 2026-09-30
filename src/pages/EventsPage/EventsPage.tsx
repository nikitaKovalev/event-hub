import { useEffect, useState } from "react";
import Button from "../../core/components/Button/Button";
import useDebounce from "../../core/hooks/useDebounce";
import useEvents from "../../core/hooks/useEvents";
import useEventsUrlParams from "../../core/hooks/useEventsUrlParams";
import EventsCard from "./EventsCard/EventsCard";
import EventsFilter from "./EventsFilter/EventsFilter";
import EventsList from "./EventsList/EventsList";
import "./EventsPage.css";

export default function EventsPage() {
  const {filters, setTitle} = useEventsUrlParams();
  const [search, setSearch] = useState(filters.title);
  const debouncedTitle = useDebounce(search);

  useEffect(() => setSearch(filters.title), [filters.title]);
  useEffect(() => setTitle(debouncedTitle), [debouncedTitle]);

  const {data} = useEvents({
    _page: Number(filters.page),
    title: {startsWith: filters.title},
  });

  return (
    <div className="container">
      <section className="events-heading">
        <div>
          <h1 className="events-heading__title">Events</h1>

          <p className="events-heading__description">
            Manage and organize your events
          </p>
        </div>

        <Button 
          variant="primary"
          startIcon={<span className="button__plus">+</span>}
        >
          Create event
        </Button>
      </section>

      <EventsFilter
        search={search}
        onSearchChange={setSearch}
      />

      <div className="events-result">
        <span className="events-result__count">6 events</span>

        <span className="events-result__hint">
          Sorted by upcoming
        </span>
      </div>

      <EventsList>
        {
          data?.data?.map(event => {
            return <EventsCard key={event.id} />
          })
        }
      </EventsList>
    </div>
  );
}