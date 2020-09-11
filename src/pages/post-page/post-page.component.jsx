import React from "react";
import { useParams } from "react-router-dom";
import "./post-page.styles.scss";

//make it a class and have methods for checking if the id is = posts.id and return a block of html
const PostPage = ({ posts }) => {
  let { id } = useParams();
  return (
    <div className="Post">
      <div className="PostTitle"></div>
      <div className="PostDescription"></div>
    </div>
  );
};

export default PostPage;
