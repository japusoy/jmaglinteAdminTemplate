import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@progress/kendo-theme-default/dist/all.css';

import Header from './components/Common/Header/Header';
import Sidebar from "./components/Common/Sidebar/Sidebar";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Forms from "./components/Forms/Forms";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div id="app-drawer">
        <Sidebar />
        <div id="drawer-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
