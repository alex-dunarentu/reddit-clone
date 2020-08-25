import React from "react";
import "./posts.styles.scss";

const Posts = ({ posts, handleVotePos, handleVoteNeg }) => {
  posts.sort(function (a, b) {
    return b.votes - a.votes;
  });
  return (
    <div className="Posts">
      {posts.map(({ id, title, description, votes }) => (
        <div key={id} className="PostComponent">
          <div className="PostVotes">
            <i
              onClick={() => handleVotePos(id)}
              value={id}
              className="Arrow Up"
            ></i>
            <span className="Votes">{votes}</span>
            <i
              onClick={() => handleVoteNeg(id)}
              value={id}
              className="Arrow Down"
            ></i>
          </div>
          <div className="PostDescription">
            <h1 className="PostTitle">{title}</h1>
            <h2 className="PostText">{description}</h2>
            <button type="delete" className="DeleteIcon">
              delete post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;