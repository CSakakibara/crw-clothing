import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <div>
      <SignIn />
    </div>
    <div>SignUp</div>
  </div>
);

export default SignInAndSignUpPage;
