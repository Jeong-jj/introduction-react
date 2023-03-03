import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Header, Banner, Nav, Footer } from "./components/Common";
import { Career } from "./components/Career/Career";
import { Skills } from "./components/Skills/Skills";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Practice } from "./components/Practice/Practice";
import { Incomplete } from "./components/Incomplete/Incomplete";

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
  const isPCscreenOrTablet = useMediaQuery({ query: "(min-width:1024px)" });

  return (
    <div className="App">
      {isPCscreenOrTablet ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Career />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="practice" element={<Practice />} />
          </Route>
        </Routes>
      ) : (
        <Incomplete />
      )}
    </div>
  );
}

export default App;
