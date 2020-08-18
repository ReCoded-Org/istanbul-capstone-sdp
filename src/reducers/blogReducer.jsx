import {
  ADD_BLOG_SUCCESS,
  ADD_BLOG_ERROR,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  BLOG_APPROVEMENT_SUCCESS,
  BLOG_APPROVEMENT_ERROR,
} from "../actions/actionTypes";

const initState = {
  blogError: null,
  blogErrKey: null,
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        blogError: null,
      };
    case ADD_BLOG_ERROR:
      return {
        ...state,
        blogError: "Bloge adding failed",
        blogErrMessage: action.err.message,
        blogErrKey: "addBlog",
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        blogError: null,
      };
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        blogError: "Adding a new comment failed",
        blogErrMessage: action.err.message,
        blogErrKey: "addComment",
      };
    case BLOG_APPROVEMENT_SUCCESS:
      return {
        ...state,
        blogError: null,
      };
    case BLOG_APPROVEMENT_ERROR:
      return {
        ...state,
        blogError: "Blog approvement failed",
        blogErrMessage: action.err.message,
        blogErrKey: "blogApprovement",
      };
    default:
      return state;
  }
};

export default blogReducer;
