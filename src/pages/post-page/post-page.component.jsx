import React from "react";
import { useParams, Link } from "react-router-dom";

import "./post-page.styles.scss";

const PostPage = ({ posts }) => {
  let { id } = useParams();
  let title, description, votes;
  for (let i = 0; i < posts.length; i++) {
    if (parseInt(id, 10) === posts[i].id) {
      title = posts[i].title;
      description = posts[i].description;
      votes = posts[i].votes;
    }
  }
  return (
    <div className="Post">
      <Link to="/">
        <button type="back" className="BackButton">
          &#8249;
        </button>
      </Link>
      <div className="Title">{title}</div>
      <div className="Description">{description}</div>
      <div className="Votes">votes:{votes}</div>
    </div>
  );
};

export default PostPage;