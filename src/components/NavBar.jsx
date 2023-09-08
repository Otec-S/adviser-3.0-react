import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";

export default function NavBar({}) {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "nav__title nav__title_active" : "nav__title"}`
        }
      >
        главная
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? "nav__title nav__title_active" : "nav__title"}`
        }
      >
        о фирме
      </NavLink>

      {/* 
          // <NavigationLink navigationLinkText="главная" />
          // <NavigationLink navigationLinkText="о фирме" />
          // <NavigationLink navigationLinkText="новости" />
          // <NavigationLink navigationLinkText="аналитика" />
          // <NavigationLink navigationLinkText="услуги" />
          // <NavigationLink navigationLinkText="клиенты" />
          // <NavigationLink navigationLinkText="контакты" /> */}
    </nav>
  );
}
