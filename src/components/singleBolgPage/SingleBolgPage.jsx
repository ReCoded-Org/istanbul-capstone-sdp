import React from "react";
import { Header } from "./sections/Header";
import { BlogHeader } from "./sections/BlogHeader";
import { BlogInfo } from "./sections/BlogInfo";
import { BlogContent } from "./sections/BlogContent";
import { Comments } from "./sections/Comments";
import { Recommended } from "./sections/Recommended";

export const SingleBolgPage = () => {
  return (
    <div>
      <Header />
      <BlogHeader />
      <BlogInfo />
      <BlogContent />
      <Comments />
      <Recommended />
    </div>
  );
};
