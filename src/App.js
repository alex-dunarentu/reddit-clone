import React from "react";
import Header from "./components/header/header.component";
import POSTS from "./components/posts/posts.data";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [...POSTS],
      newPostTile: "",
      newPostDescription: "",
    };
  }
  handleSubmit = (event) => {
    const { newPostTile: title, newPostDescription: description } = this.state;
    let ok = 1,
      arr = this.state.posts;
    for (let i = 0; i < arr.length; i++) {
      console.log("ok");
      if (arr[i].title === title && arr[i].description === description) {
        ok = 0;
        alert("Post already exists!");

        event.preventDefault();
        return;
      }
    }
    if (ok === 1) {
      //const { newPostTile, newPostDescription } = this.state;
      const newPost = { title, description, votes: 0, id: uuidv4() };
      //const newPost = { title: newPostTitle, description: newPostDescription, votes: 0, id: uuidv4() };
      const newPosts = [...this.state.posts, newPost];
      this.setState({ posts: newPosts });
    }
    event.preventDefault();
  };

  handleTitle = (event) => {
    this.setState({ newPostTile: event.target.value });
  };

  handleText = (event) => {
    this.setState({ newPostDescription: event.target.value });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="MainContent">
          <div className="Posts">
            <div>
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
          </div>
          <div className="AddPost">
            <div className="CreatePostComponent">
              <form onSubmit={this.handleSubmit}>
                <div className="CreatePostTitle">
                  <label>Create a new post:</label>
                  <input
                    className="CreatePostInput"
                    type="text"
                    placeholder="Enter post title here"
                    onChange={this.handleTitle}
                    required
                  />
                </div>
                <div className="CreatePostText">
                  <textarea
                    type="text"
                    placeholder="Enter text here"
                    onChange={this.handleText}
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Submit Post"
                  className="SubmitButton"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
