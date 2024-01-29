import React from 'react';
import './App.css';
import Footer from './componets/Sections/Footer';
import {dummyData } from './api/dummydata';
import LayOut from './componets/LayOut';
import { Routes, Route, Outlet } from "react-router-dom"
import AllProductVisual from './componets/Pages/AllProductVisual';
import HomeSection from './componets/Sections/HomeSection';


function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LayOut />}>
          <Route index element={<HomeSection/>} />
          <Route path="products" element={<AllProductVisual products={dummyData} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
