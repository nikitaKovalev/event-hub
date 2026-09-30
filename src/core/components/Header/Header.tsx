import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  const links = [
    {
      to: '/',
      children: 'Dashboard',
    },
    {
      to: '/events',
      children: 'Events',
    },
    {
      to: '/attendees',
      children: 'Attendees',
    },
  ];

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo">
          Event<span>Hub</span>
        </NavLink>

        <nav className="header__nav">
          {
            links.map(link => {
              return (
                <NavLink
                  key={link.children}
                  className={({isActive}) => `header__link ${isActive ? 'header__link--active' : ''}`}
                  {...link}
                />
              )
            })
          }
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