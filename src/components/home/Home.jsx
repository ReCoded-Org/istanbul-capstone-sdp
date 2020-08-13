import React from "react";
import { Header } from "./sections/Header";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";
import LiveChat from "../../containers/LiveChat";

export const Home = () => {
  return (
    <div>
      <LiveChat />
      <Header />
      <RelatedCards />
    </div>
  );
};
