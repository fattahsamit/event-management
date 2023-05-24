import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
