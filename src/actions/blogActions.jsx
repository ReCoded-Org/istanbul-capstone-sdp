import { ADD_BLOG_SUCCESS, ADD_BLOG_ERROR } from "./actionTypes";

export const addBlog = (blogHeaderImage, blogBodyImage, data) => {
  console.log("data", data);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const storage = getFirebase().storage().ref();
    const blogId = data.userId + data.title.split(" ").join("");
    const metadata = {
      contentType: "image/jpeg",
    };
    storage
      .child(
        `users/${data.userId}/images/blogs/${blogId}/${blogHeaderImage.name}`
      )
      .put(blogHeaderImage, metadata)
      .then((uploadTaskResposive) =>
        uploadTaskResposive.ref.getDownloadURL().then((uploadedPhotoURL) =>
          firestore
            .collection("blogs")
            .doc(blogId)
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
