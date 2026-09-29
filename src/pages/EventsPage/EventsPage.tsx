import Button from "../../core/components/Button/Button";
import EventsCard from "./EventsCard/EventsCard";
import EventsFilter from "./EventsFilter/EventsFilter";
import EventsList from "./EventsList/EventsList";
import "./EventsPage.css";

export default function EventsPage() {
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

      <EventsFilter/>

      <div className="events-result">
        <span className="events-result__count">6 events</span>

        <span className="events-result__hint">
          Sorted by upcoming
        </span>
      </div>

      <EventsList>
        <EventsCard/>
        <EventsCard/>
        <EventsCard/>
      </EventsList>
    </div>
  );
}