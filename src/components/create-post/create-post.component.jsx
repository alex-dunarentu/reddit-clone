import React from "react";
import "./create-post.styles.scss";

const CreatePost = ({
  handleText,
  handleTitle,
  handleSubmit,
  newPostDescription,
  newPostTitle,
}) => {
  return (
    <div className="AddPost">
      <div className="CreatePostComponent">
        <form onSubmit={handleSubmit}>
          <div className="CreatePostTitle">
            <label>Create a new post:</label>
            <input
              className="CreatePostInput"
              type="text"
              placeholder="Enter post title here"
              value={newPostTitle}
              onChange={handleTitle}
              required
            />
          </div>
          <div className="CreatePostText">
            <textarea
              type="text"
              placeholder="Enter text here"
              onChange={handleText}
              value={newPostDescription}
              required
            />
          </div>
          <input type="submit" value="Submit Post" className="SubmitButton" />
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
