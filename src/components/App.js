import Header from "./Header";
import HeaderTitle from "./HeaderTitle";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";

import "./Header.css";
import AboutFirm from "./AboutFirm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutFirm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
