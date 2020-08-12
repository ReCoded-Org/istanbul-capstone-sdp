import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";
import Footer from "../common/Footer";

function Blogs() {
  return (
    <>
      <div className="blogsHeader"></div>
      <Container>
        <BlogsDisplay />
      </Container>
      <Footer />
    </>
  );
}

export default Blogs;
