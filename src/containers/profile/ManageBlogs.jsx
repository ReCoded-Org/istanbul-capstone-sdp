import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Button, ListGroup } from "react-bootstrap";
import BlogEditor from "../BlogEditor/BlogEditor";
import BlogBox from "./BlogBox";
import { approveBlog } from "../../actions/blogActions";

const ADMIN_ROLE = "ADMIN";
const AUTHOR_ROLE = "AUTHOR";

const ManageBlogs = (props) => {
  const { allBlogs, userId, currentUserBlogs, profile } = props;

  const [newBlog, setNewBlog] = React.useState(null);

  const closeBlogEditor = () => {
    setNewBlog(null);
  };

  const displayedBlogs =
    profile.userType === ADMIN_ROLE ? allBlogs : currentUserBlogs;

  return (
    <ListGroup defaultActiveKey="none">
      {profile.userType === AUTHOR_ROLE && (
        <Button
          variant="success"
          className="mb-5"
          onClick={() =>
            setNewBlog(
              <BlogEditor closeBlogEditor={closeBlogEditor} profile={profile} />
            )
          }
        >
          Add a new blog
        </Button>
      )}

      {newBlog}

      {displayedBlogs &&
        !newBlog &&
        displayedBlogs.map((blog) => {
          return (
            <ListGroup.Item>
              <BlogBox
                approveBlog={props.approveBlog}
                blog={blog}
                userType={profile.userType}
              />
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { userId } = ownProps;
  const blogs = state.firestore.data.blogs;

  const allBlogs = [];

  const currentUserBlogs = [];
  if (blogs) {
    for (const blogId in blogs) {
      if (blogs[blogId].userId === userId) {
        currentUserBlogs.push(blogs[blogId]);
      }
      allBlogs.push(blogs[blogId]);
    }
  }

  return {
    currentUserBlogs,
    allBlogs,
    auth: state.firebase.auth,
    userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    approveBlog: (blogData) => dispatch(approveBlog(blogData)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "blogs" }])
)(ManageBlogs);
