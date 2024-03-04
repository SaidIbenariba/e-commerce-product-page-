import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import ProductImagesZoom from "./ProductImagesZoom";
import Card from "./card";
import "./App.css";

import * as React from "react";
export default function Page() {
  return (
    <>
      <div className="container">
        <Header />
        <Card />
        <div className="center">
          <ProductImages />
          <ProductDetails />
        </div>
      </div>
      <ProductImagesZoom />
    </>
  );
}
