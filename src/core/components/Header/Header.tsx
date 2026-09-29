import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          Event<span>Hub</span>
        </a>

        <nav className="header__nav">
          <a href="/" className="header__link">
            Dashboard
          </a>

          <a href="/events" className="header__link header__link--active">
            Events
          </a>

          <a href="/attendees" className="header__link">
            Attendees
          </a>
        </nav>

        <div className="header__profile">
          <div className="header__avatar">NK</div>

          <div>
            <div className="header__username">Nikita</div>
            <div className="header__role">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}