import React from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { Routes, Route } from "react-router-dom";
import Main from "../views/pages/main/Main";
import Home from "../views/pages/home/Home";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </AppContent>
          {/* <AppContent /> */}
          {/* 페이지 */}
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
