import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { selectCurrentUser } from "./redux/user/user-selector";
import CheckoutPage from "./pages/checkout/checkout";
import { checkUserSession } from "./redux/user/user-actions";
// import { selectCollectionsForPreview } from "./redux/shop/shop-selector";

class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser } = this.props;
    // this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    //if the user logs out current user is set null,
    //which is returned from onAUthStateCHanged
    // setCurrentUser(userAuth);
    // addCollectionDocuments(
    //   "collections",
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
    // });

    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
