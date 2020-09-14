import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import PostPage from "./pages/post-page/post-page.component";
import POSTS_DATA from "./components/posts/posts.data";
//import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [...POSTS_DATA],
      currentUser: null,
    };
  }

  addPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post],
    });
  };
  /* unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } */

  updatePosts = (p) => {
    this.setState({ posts: p });
  };

  deletePost = (id) => {
    let newPosts = this.state.posts;
    for (let i = 0; i < newPosts.length; i++) {
      if (newPosts[i].id === id) {
        newPosts.splice(i, 1);
      }
    }
    this.setState({
      posts: newPosts,
    });
  };

  render() {
    return (
      <div className="RedditClone">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path="/reddit-clone"
            render={(props) => (
              <HomePage
                {...props}
                currentUser={this.state.currentUser}
                addPost={this.addPost}
                posts={this.state.posts}
                updatePosts={this.updatePosts}
                deletePost={this.deletePost}
              />
            )}
          />
          <Route exact path="/reddit-clone/signin" component={SignInPage} />
          <Route exact path="/reddit-clone/signup" component={SignUpPage} />
          <Route
            path="/reddit-clone/posts/:id"
            render={(props) => <PostPage {...props} posts={this.state.posts} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
