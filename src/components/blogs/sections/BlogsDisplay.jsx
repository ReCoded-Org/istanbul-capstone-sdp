import React from "react";
import BlogDisplay from "./BlogDisplay";
import { Link } from "react-router-dom";
import "../index.css";

const BLOG_POST_SPECS = [
  {
    photo: require("././images/blog0.jpg"),
  },
  {
    photo: require("././images/blog1.jpg"),
  },
  {
    photo: require("././images/blog2.jpg"),
  },
  {
    photo: require("././images/blog3.jpg"),
  },
];

export default function BlogsDisplay() {
  // since we're using arrays in i18next, its index will be translation key
  return (
    <>
      {BLOG_POST_SPECS.map((blogpost, i) => {
        return (
          <Link to={`/blogposts/${i}`} key={`blogPost${i}`}>
            <BlogDisplay translationKey={i} photo={blogpost.photo} />
          </Link>
        );
      })}
    </>
  );
}
