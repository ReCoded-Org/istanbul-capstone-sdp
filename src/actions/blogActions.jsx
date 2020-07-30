export const addBlog = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'ADD_BLOG', project });
    }
}