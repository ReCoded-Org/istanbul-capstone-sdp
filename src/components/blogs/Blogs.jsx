import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import BlogsDisplay from "./sections/BlogsDisplay";

function Blogs() {
  return (
    <Container>
     <BlogsDisplay />
    </Container>
  );
}

export default Blogs;

// import React from "react";
// import { Link } from "react-router-dom";

// const Blogs = () => {
//   return (
//     <div>
//       <Link to="/singleblogpage">Lorem ipsem till Gunsu add her code</Link>
//     </div>
//   );
// };

// export default Blogs;