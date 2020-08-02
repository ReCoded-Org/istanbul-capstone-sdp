import React from "react";
import { Header } from "./sections/Header";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";

export const Home = () => {
  return (
    <div>
      <Header />
      <RelatedCards />
    </div>
  );
};
