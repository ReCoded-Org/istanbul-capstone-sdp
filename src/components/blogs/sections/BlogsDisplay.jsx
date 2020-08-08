import React from "react";
import BlogDisplay from "./BlogDisplay";
import { Link } from "react-router-dom";
import "../index.css";

export default function BlogsDisplay() {
  const BLOGPOST_SPECS = [
    {
      translationKey: "blog0",
      photo: require("././images/blog0.jpg"),
    },
    {
      translationKey: "blog1",
      photo: require("././images/blog1.jpg"),
    },
    {
      translationKey: "blog2",
      photo: require("././images/blog2.jpg"),
    },
    {
      translationKey: "blog3",
      photo: require("././images/blog3.jpg"),
    },
  ];
  // assuming that each post will have different translation keys, assign it as key val.
  return (
    <>
      {BLOGPOST_SPECS.map((blogpost) => {
        return (
          <Link
            to={"/" + blogpost.translationKey}
            key={blogpost.translationKey}
          >
            <BlogDisplay
              translationKey={blogpost.translationKey}
              photo={blogpost.photo}
            />
          </Link>
        );
      })}
    </>
  );
}
