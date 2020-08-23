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
            <div className="PostTitle">
              <h1>{title}</h1>
            </div>
            <div className="PostText">
              <h2>{description}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
