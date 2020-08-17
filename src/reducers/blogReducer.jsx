import { ADD_BLOG_SUCCESS, ADD_BLOG_ERROR } from "../actions/actionTypes";

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
    default:
      return state;
  }
};

export default blogReducer;
