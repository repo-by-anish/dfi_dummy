import React from 'react';
import './App.css';
import Footer from './componets/Sections/Footer';
import {products } from './api/dummydata';
import LayOut from './componets/LayOut';
import { Routes, Route } from "react-router-dom"
import AllProductVisual from './componets/Pages/AllProductVisual';
import HomeSection from './componets/Sections/HomeSection';


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LayOut />}>
          <Route index element={<HomeSection/>} />
          <Route path="products" element={<AllProductVisual/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
