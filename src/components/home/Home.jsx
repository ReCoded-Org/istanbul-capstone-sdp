import React from "react";
import "./index.css";
import { Header } from "./sections/Header";
import RelatedCards from "./sections/RelatedCards";
import LiveChat from "../../containers/liveChat/LiveChat";
import Footer from "../common/Footer";

export const Home = () => {
  return (
    <div>
      <LiveChat />
      <Header />
      <RelatedCards />
      <Footer />
    </div>
  );
};
