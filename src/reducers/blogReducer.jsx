const initState = {};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      console.log("a new blog has been added");
      return state;
    default:
      return state;
  }
};

export default blogReducer;
