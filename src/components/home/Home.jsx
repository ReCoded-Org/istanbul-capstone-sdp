import React from "react";
import { Header } from "./sections/Header";
import RelatedCards from "./sections/RelatedCards";
import "./index.css";

export const Home = () => {
  return (
    <div>
      <Header />
      <RelatedCards />
    </div>
  );
};
