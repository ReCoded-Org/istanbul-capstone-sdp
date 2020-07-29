import React from "react";
import "../index.css";
import BlogDisplay from "./BlogDisplay";
import { Row } from "react-bootstrap";

export default function BlogsDisplay() {
  const blogData = [
    {
      name: "gunsu",
      desc: "dsasa",
      title: "fsdffaffsd",
      index: 0,
    },
    {
      name: "samah",
      index: 1,
    },
  ];

  const renderBlogs = (blogsDataList = blogData) => {
    let renderElements = blogsDataList.map((el, i) => {
      return (
        <BlogDisplay
          name={el.name}
          desc={el.desc}
          title={el.title}
          index={el.index}
          key={i} 
        />
      );
    });
    return renderElements;
  };

  return <Row>{renderBlogs(blogData)}</Row>;
}
