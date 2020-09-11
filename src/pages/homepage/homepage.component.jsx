import React from "react";
import Posts from "../../components/posts/posts.component";
import CreatePost from "../../components/create-post/create-post.component";
import POSTS_DATA from "../../components/posts/posts.data";
import { v4 as uuidv4 } from "uuid";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostTitle: "",
      newPostDescription: "",
      showCreatePost: false,
    };
  }

  handleSubmit = (event) => {
    const { newPostTitle: title, newPostDescription: description } = this.state;
    let ok = 1;
    let { posts } = this.props;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].title === title && posts[i].description === description) {
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
      this.setState({
        //posts: newPosts,
        newPostTitle: "",
        newPostDescription: "",
        showCreatePost: false,
      });
      this.props.addPost(newPost);
    }
    event.preventDefault();
  };

  handleVotePos = (id) => {
    let { posts } = this.props;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        posts[i].votes += 1;
      }
    }
    this.props.updatePosts(posts);
  };
  handleVoteNeg = (id) => {
    let { posts } = this.props;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        posts[i].votes -= 1;
      }
    }
    this.props.updatePosts(posts);
  };

  handleDelete = (id, event) => {
    this.props.deletePost(id);
  };
  handleTitle = (event) => {
    this.setState({ newPostTitle: event.target.value });
  };

  handleText = (event) => {
    this.setState({ newPostDescription: event.target.value });
  };

  handleButtonClick = () => {
    this.setState({
      showCreatePost: true,
    });
  };
  handleBackdrop = () => {
    this.setState({
      showCreatePost: false,
    });
  };
  render() {
    const { newPostTitle, newPostDescription, showCreatePost } = this.state;
    const createPostClassName = `AddPost ${showCreatePost ? "IsActive" : ""} `;
    const backdropClassName = `BackDrop ${showCreatePost ? "IsActive" : ""} `;
    return (
      <div className="HomePage">
        <div className={backdropClassName} onClick={this.handleBackdrop} />
        <div className="MainContent">
          <Posts
            posts={this.props.posts}
            handleDelete={this.handleDelete}
            handleVotePos={this.handleVotePos}
            handleVoteNeg={this.handleVoteNeg}
          />
          <CreatePost
            handleTitle={this.handleTitle}
            handleText={this.handleText}
            handleSubmit={this.handleSubmit}
            newPostTitle={newPostTitle}
            newPostDescription={newPostDescription}
            currentUser={this.props.currentUser}
            createPostClassName={createPostClassName}
          />
        </div>
        <div className="CreatePostButton">
          <button type="button" onClick={this.handleButtonClick}>
            CREATE POST
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
