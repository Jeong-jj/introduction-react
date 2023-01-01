import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Header, Banner, Nav, Footer } from "./components/Common";
import { Career } from "./components/Career/Career";
import { Skills } from "./components/Skills/Skills";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Practice } from "./components/Practice/Practice";
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
