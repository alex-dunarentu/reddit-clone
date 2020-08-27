import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in/sign-in.component";
import SignUpPage from "./pages/sign-up/sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

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
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} currentUser={this.state.currentUser} />
            )}
          />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
