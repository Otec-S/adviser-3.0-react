import { NavLink } from "react-router-dom";
import "./Header.css";


export default function NavigationLink({ navigationLinkText }) {
  return (
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${isActive ? "nav__title nav__title_active" : "nav__title"}`
      }
    >
      {navigationLinkText}
    </NavLink>
  );
}
