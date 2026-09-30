import "./States.css";

export default function LoaderState() {
  return (
    <div className="state">
      <div className="loader" />

      <h3 className="state__title">Loading events</h3>

      <p className="state__description">
        Please wait while we load your events.
      </p>
    </div>
  );
}