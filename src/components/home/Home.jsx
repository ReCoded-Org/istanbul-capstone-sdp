import React from "react";
import { Header } from "./sections/Header";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";
import Footer from "../common/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <RelatedCards />
      <Footer />
    </div>
  );
};
