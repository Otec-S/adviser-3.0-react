import { Routes, Route } from "react-router-dom";
import "./Main.css";
import StartPage from "./StartPage";
import AboutPage from "./AboutPage";

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}
