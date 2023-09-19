import "./HeaderTitle.css";
import { Link } from "react-router-dom";

export default function HeaderTitle() {
  return (
    <h1 className="header__title">
      <Link to="/" className="header__title-link">
        Юридическая фирма "Эдвайзер"
      </Link>
    </h1>
  );
}
