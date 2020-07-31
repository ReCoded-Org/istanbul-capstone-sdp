export const addBlog = (project) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_BLOG", project });
  };
};
