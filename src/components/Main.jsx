import { Routes, Route } from "react-router-dom";
import "./Main.css";
import StartPage from "./StartPage";
import AboutPage from "./AboutPage";
import NewsPage from "./NewsPage";


export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </main>
  );
}
