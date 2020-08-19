import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";
import { Header } from "./sections/Header";
import Footer from "../common/Footer";
import blogHeader from "./sections/images/Blogs-headers.png";

function Blogs() {
  return (
    <div>
      <Header />
      <Container>
        <BlogsDisplay />
      </Container>
      <Footer />
    </div>
  );
}

export default Blogs;