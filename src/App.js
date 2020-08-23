import React from "react";
import Header from "./components/header/header.component";
import Posts from "./components/posts/posts.component";
import CreatePost from "./components/create-post/create-post.component";
import POSTS_DATA from "./components/posts/posts.data";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [...POSTS_DATA],
      newPostTitle: "",
      newPostDescription: "",
    };
  }
  handleSubmit = (event) => {
    const { newPostTitle: title, newPostDescription: description } = this.state;
    let ok = 1,
      arr = this.state.posts;
    for (let i = 0; i < arr.length; i++) {
      console.log("ok");
      if (arr[i].title === title && arr[i].description === description) {
        ok = 0;
        alert("Post already exists!");
        this.setState({
          newPostTitle: "",
          newPostDescription: "",
        });
        event.preventDefault();
        return;
      }
    }
    if (ok === 1) {
      //const { t, newPostDescription } = this.state;
      const newPost = { title, description, votes: 0, id: uuidv4() };
      //const newPost = { title: newPostTitle, description: newPostDescription, votes: 0, id: uuidv4() };
      const newPosts = [...this.state.posts, newPost];
      this.setState({
        posts: newPosts,
        newPostTitle: "",
        newPostDescription: "",
      });
    }
    event.preventDefault();
  };

  handleTitle = (event) => {
    this.setState({ newPostTitle: event.target.value });
  };

  handleText = (event) => {
    this.setState({ newPostDescription: event.target.value });
  };

  render() {
    const { posts, newPostTitle, newPostDescription } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="MainContent">
          <Posts posts={posts} />
          <CreatePost
            handleTitle={this.handleTitle}
            handleText={this.handleText}
            handleSubmit={this.handleSubmit}
            newPostTitle={newPostTitle}
            newPostDescription={newPostDescription}
          />
        </div>
      </div>
    );
  }
}

export default App;
