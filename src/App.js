import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Career from './components/Career';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Practice from './components/Practice';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Nav/>

      <Outlet/>

      <Footer/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Career/>} />
          <Route path='skills' element={<Skills/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='practice' element={<Practice/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
