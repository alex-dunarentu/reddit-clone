import React from "react";
import "./posts.styles.scss";

const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="Posts">
      {posts.map(({ id, title, description, votes }) => (
        <div key={id} className="PostComponent">
          <div className="PostVotes">
            <i className="Arrow Up"></i>
            <span className="Votes">{votes}</span>
            <i className="Arrow Down"></i>
          </div>
          <div className="PostDescription">
            <div className="PostTitle">
              <span>{title}</span>
            </div>
            <div className="PostText">
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
