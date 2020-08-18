import {
  ADD_BLOG_SUCCESS,
  ADD_BLOG_ERROR,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  BLOG_APPROVEMENT_SUCCESS,
  BLOG_APPROVEMENT_ERROR,
} from "./actionTypes";

export const addBlog = (blogHeaderImage, data) => {
  console.log("data", data);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const storage = getFirebase().storage().ref();
    const metadata = {
      contentType: "image/jpeg",
    };
    storage
      .child(
        `users/${data.userId}/images/blogs/${data.blogId}/${blogHeaderImage.name}`
      )
      .put(blogHeaderImage, metadata)
      .then((uploadTaskResposive) =>
        uploadTaskResposive.ref.getDownloadURL().then((uploadedPhotoURL) =>
          firestore
            .collection("blogs")
            .doc(data.blogId)
            .set({ imageURL: uploadedPhotoURL, ...data })
        )
      )
      .then(() => {
        dispatch({ type: ADD_BLOG_SUCCESS });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({ type: ADD_BLOG_ERROR, err });
      });
  };
};

export const addComment = (blogId, commentData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .doc(blogId)
      .update({ comments: firestore.FieldValue.arrayUnion({ ...commentData }) })
      .then(() => {
        dispatch({ type: ADD_COMMENT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: ADD_COMMENT_ERROR, err });
      });
  };
};

export const approveBlog = (blogData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .doc(blogData.blogId)
      .update({ approvement: blogData.approvement })
      .then(() => {
        dispatch({ type: BLOG_APPROVEMENT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: BLOG_APPROVEMENT_ERROR, err });
      });
  };
};
