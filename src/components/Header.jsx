import "./Header.css";
import NavigationLink from "./NavigationLink";
import HeaderTitle from "./HeaderTitle";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <HeaderTitle />
      <NavBar />
    </header>
  );
}
