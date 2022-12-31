import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Career } from "./components/Career";
import { Nav } from "./components/common/Nav";
import { Banner } from "./components/common/Banner";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Practice } from "./components/Practice";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Career />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="practice" element={<Practice />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
