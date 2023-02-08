import React, { ReactElement } from "react";
import { CartProvider } from "react-use-cart";
import Footera from "../components/Footer";
import Nav2 from "../components/Nav2";
import Login from "../login";

const index = () => {
  return <Login />;
};

index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Nav2 />
      <>{page}</>
      <Footera />
    </CartProvider>
  );
};

export default index;
