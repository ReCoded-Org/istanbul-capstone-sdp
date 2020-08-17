import React from "react";
import "./index.css";
import { Header } from "./sections/Header";
import RelatedCards from "./sections/RelatedCards";
import LiveChat from "../../containers/liveChat/LiveChat";
import Assessment from "./sections/Assessment";
import Stories from "./sections/Stories";
import WeCare from "./sections/WeCare";
import Survivor from "./sections/Survivor";
import Footer from "../common/Footer";

export const Home = () => {
  return (
    <div>
      <LiveChat />
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
