import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";

import blogHeader from "./sections/images/Blogs-headers.png";
import Footer from "../common/Footer";

function Blogs() {
  return (
    <>
      <img width="100%" src={blogHeader} alt="" />
      <Container style={{ marginTop: "10rem" }}>
        <BlogsDisplay />
      </Container>
      <Footer />
    </>
  );
}

export default Blogs;
