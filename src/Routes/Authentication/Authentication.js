import React from "react";
import SignInForm from "../../components/sign-in-form/SignInForm";
import SignupForm from "../../components/sign-up-form/SignupForm";
import "./Authentical.styles.scss"

const Authentication = () => {
  return (
    <main className="authentication-container">
      <SignInForm />
      <SignupForm />
    </main>
  );
};

export default Authentication;
