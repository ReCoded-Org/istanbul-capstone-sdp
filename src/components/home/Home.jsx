import React from "react";
import { Header } from "./sections/Header";
import WeCare from "./sections/WeCare";
import Stories from "./sections/Stories";
import Assessment from "./sections/Assessment";
import "./index.css";
import RelatedCards from "./sections/RelatedCards";
import LiveChat from "../../containers/liveChat/LiveChat";

export const Home = () => {
  return (
    <div>
      <LiveChat />
      <Header />
      <WeCare />
      <Stories />
      <Assessment />
      <RelatedCards />
    </div>
  );
};
