const initState = {};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return state;
    default:
      return state;
  }
};

export default blogReducer;
