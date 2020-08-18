import React from "react";
import { Header } from "./sections/Header";
import { BlogHeader } from "./sections/BlogHeader";
import { BlogContent } from "./sections/BlogContent";
import { Comments } from "./sections/Comments";
import { Recommended } from "./sections/Recommended";

export const SingleBlogPage = (props) => {
  //This data is for testing only until we set the backend for blogs
  const blogTest = {
    blogTitle: `Why Shouldn't We Stop Struggling`,

    blogContent1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
      accumsan lacus vel facilisis. Contrary to popular belief, Lorem
      Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years
      old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through
      the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
      and Evil) by Cicero, written in 45 BC. This book is the treatise
      on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
      from a line in section 1.10.32, Book is of the ewethicsthe of
      Renaissance.`,

    blogContent2: `gh the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
      and Evil) by Cicero, written, the undoubtable source. Lorem Ipsum`,

    subTitle: `Initial Step`,

    blogContent3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua Quis
      ipsum suspendisse ultrices gravida Risus commodo viverra maecenas
      accumsan lacus vel facilisis tempor incididunt ut magna aliqua
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin
      professor at Hampden-Sydnd and Evil) by Cicero, written in 45 BC.
      This book is a treatise on the theory of ethics, very popular
      during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.`,

    blogContent4: `  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
      accumsan lacus vel facilisis. Contrary to popular belief, Lorem
      Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years
      old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through
      the cites of the word in classical literature, discovered the
      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
      1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
      and Evil) by Cicero, written in 45 BC. This book is the treatise
      on the theory of ethics, very popular during the Renaissance. The
      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
      from a line in section 1.10.32, Book is of the ewethicsthe of
      Renaissance.`,

    comments: [
      {
        person: "Ali",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting",
      },
      { person: "Samah", comment: "It has survived not only five centuries" },
      { person: "Basil", comment: "Hello world!" },
    ],

    wrappedImage: "https://i.ibb.co/QJXF6Dd/wrapped-image3.png",

    blogHeader: "https://i.ibb.co/2nDfNzp/Struggling-image.png",

    authorImage: "https://i.ibb.co/XtwrSbq/Single-blog-post-writer.png",

    authorName: "JAWDAT YILDIZ",

    publishingDate: "Jan 23, 2020",
  };

  return (
    <div>
      <Header />
      <BlogHeader blogTest={blogTest} />
      <BlogContent blogTest={blogTest} />
      <Comments blogTest={blogTest} />
      <Recommended />
    </div>
  );
};
