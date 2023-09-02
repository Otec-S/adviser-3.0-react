import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";

export default function NavBar({}) {
  return (
    <nav className="nav">
          <NavigationLink navigationLinkText="главная" />
          <NavigationLink navigationLinkText="о фирме" />
          <NavigationLink navigationLinkText="новости" />
          <NavigationLink navigationLinkText="аналитика" />
          <NavigationLink navigationLinkText="услуги" />
          <NavigationLink navigationLinkText="клиенты" />
          <NavigationLink navigationLinkText="контакты" />
    </nav>
  );
}
