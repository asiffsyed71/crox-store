import React from "react";
import SignupForm from "../../components/sign-up-form/SignupForm";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      await createUserDocFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignupForm />
    </>
  );
};

export default SignIn;
