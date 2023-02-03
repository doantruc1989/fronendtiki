import React from "react";
import Nav from "./Nav";
import Footera from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
        <main>{children}</main>
      <Footera />
    </>
  );
};

export default Layout;
