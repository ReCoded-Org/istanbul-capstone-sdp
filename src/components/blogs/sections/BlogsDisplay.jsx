import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import BlogDisplay from "./BlogDisplay";
import { Link } from "react-router-dom";
import "../index.css";

// const BLOG_POST_SPECS = [
//   {
//     photo: require("././images/blog0.jpg"),
//   },
//   {
//     photo: require("././images/blog1.jpg"),
//   },
//   {
//     photo: require("././images/blog2.jpg"),
//   },
//   {
//     photo: require("././images/blog3.jpg"),
//   },
// ];

const BlogsDisplay = (props) => {
  const { allBlogs } = props;
  // since we're using arrays in i18next, its index will be translation key
  return (
    <>
      {allBlogs && allBlogs.map((blog) => {
        return (
          <Link to={`/blogs/${blog.blogId}`} key={`blog${blog.blogId}`}>
            <BlogDisplay blog={blog} />
          </Link>
        );
      })}
    </>
  );
}


const mapStateToProps = (state, ownProps) => {
  const blogs = state.firestore.data.blogs;
  const allBlogs = [];

  if (blogs) {
    for (const blogId in blogs) {
      allBlogs.push(blogs[blogId]);
    }
  }

  return {
    allBlogs,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(BlogsDisplay);