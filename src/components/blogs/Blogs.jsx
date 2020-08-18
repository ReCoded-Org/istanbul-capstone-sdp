import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";

function Blogs() {
  return (
    <Container>
      <Header />
      <BlogsDisplay />
    </Container>
  );
}

export default Blogs;
