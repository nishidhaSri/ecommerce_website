import React from "react";
import "./sign-in.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase-utils";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acoount</h2>
        <span>Sign in with yur email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="emial"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In via Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
