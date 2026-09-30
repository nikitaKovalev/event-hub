import { useEffect, useMemo, useState } from "react";
import Button from "../../core/components/Button/Button";
import useDebounce from "../../core/hooks/useDebounce";
import useEvents from "../../core/hooks/useEvents";
import useEventsUrlParams from "../../core/hooks/useEventsUrlParams";
import EventsCard from "./EventsCard/EventsCard";
import EventsFilter from "./EventsFilter/EventsFilter";
import EventsList from "./EventsList/EventsList";
import "./EventsPage.css";
import LoaderState from "../../core/components/States/LoaderState";
import ErrorState from "../../core/components/States/ErrorState";
import EmptyState from "../../core/components/States/EmptyState";

export default function EventsPage() {
  const {filters, setTitle, setStatus, setType} = useEventsUrlParams();
  const [search, setSearch] = useState(filters.title);
  const debouncedTitle = useDebounce(search);

  useEffect(() => setSearch(filters.title), [filters.title]);
  useEffect(() => setTitle(debouncedTitle), [debouncedTitle]);

  const {data, isLoading, isError} = useEvents({
    _page: Number(filters.page),
    _sort: `startDate`,
    title: {startsWith: filters.title},
    status: {startsWith: filters.status},
    type: {startsWith: filters.type},
  });

  const content = useMemo(() => {
    if (isLoading) {
      return <LoaderState />;
    }

    if (isError) {
      return <ErrorState />;
    }

    if (!isLoading && !data?.data.length) {
      return <EmptyState />;
    }

    return (
      <EventsList>
        {
          data?.data?.map(event => {
            return <EventsCard key={event.id} eventItem={event} />
          })
        }
      </EventsList>
    );
  }, [data, isError, isLoading]);

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
        status={filters.status}
        onStatusChange={setStatus}
        type={filters.type}
        onTypeChange={setType}
      />

      <div className="events-result">
        <span className="events-result__count">{data?.data.length} events</span>

        <span className="events-result__hint">
          Sorted by upcoming
        </span>
      </div>

      {content}
    </div>
  );
}