import React from "react";
import { Header } from "./sections/Header";
import WeCare from "./sections/WeCare";
import Stories from "./sections/Stories";
import Assessment from "./sections/Assessment";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";
import Footer from "../common/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <WeCare />
      <Stories />
      <Assessment />
      <RelatedCards />
      <Footer />
    </div>
  );
};
