import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      //if the user logs out current user is set null,
      //which is returned from onAUthStateCHanged
      else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
