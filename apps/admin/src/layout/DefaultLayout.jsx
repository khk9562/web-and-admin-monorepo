import React from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent>
            <main>
              <h1>Admin Home</h1>
            </main>
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
