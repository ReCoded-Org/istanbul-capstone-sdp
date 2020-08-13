import React from "react";
import { Header } from "./sections/Header";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";
import Assessment from "./sections/Assessment";
import Stories from "./sections/Stories";
import WeCare from "./sections/WeCare";
import Survivor from "./sections/Survivor";
import Footer from "../common/Footer";
import LiveSupport from "./sections/LiveSupport";

export const Home = () => {
  return (
    <div>
      <LiveSupport />
      <Header />
      <WeCare />
      <Stories />
      <Survivor />
      <RelatedCards />
      <Assessment />
      <Footer />
    </div>
  );
};
