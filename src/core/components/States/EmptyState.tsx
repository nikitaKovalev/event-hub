import "./States.css";

export default function EmptyState() {
  return (
    <div className="state">
      <div className="state__icon">
        <span>◇</span>
      </div>

      <h3 className="state__title">No events found</h3>

      <p className="state__description">
        We couldn't find any events matching your filters.
      </p>
    </div>
  );
}