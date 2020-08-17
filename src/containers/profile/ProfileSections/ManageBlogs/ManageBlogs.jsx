import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Button } from "react-bootstrap";
import BlogEditor from "../../../../containers/BlogEditor/BlogEditor";

const ManageBlogs = (props) => {
  const { allBlogs, userId, currentUserBlogs } = props;

  const [newBlog, setNewBlog] = React.useState(null);

  const handleSubmit = () => {
    setNewBlog(null);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <Button
        variant="success"
        className="mb-5"
        onClick={() => setNewBlog(<BlogEditor handleSubmit={handleSubmit} />)}
      >
        Add a new blog
      </Button>

      {newBlog}
    </div>
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
    // 
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "blogs" }])
)(ManageBlogs);
