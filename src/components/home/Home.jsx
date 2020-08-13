import React from "react";
import { Header } from "./sections/Header";
import RelatedCards from "./sections/RelatedCards";
import LiveChat from "../../containers/liveChat/LiveChat";

export const Home = () => {
  return (
    <div>
      <LiveChat />
      <Header />
      <RelatedCards />
    </div>
  );
};
