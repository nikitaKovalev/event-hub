import "./States.css";

export default function ErrorState() {
  return (
    <div className="state">
      <div className="state__icon state__icon--error">
        <span>!</span>
      </div>

      <h3 className="state__title">Something went wrong</h3>

      <p className="state__description">
        We couldn't load the data. Please try again.
      </p>

      <button className="state__button">
        Try again
      </button>
    </div>
  );
}