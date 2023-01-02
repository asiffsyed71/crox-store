import React, { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithEmailPassword,
} from "../../utils/firebase.util";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const googleAuthHandler = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      await createUserDocFromAuth(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailPassword(email, password);
      setFormFields(defaultFields);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Accound not found");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your credentials</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required={true}
          changeHandler={handleInputChange}
          value={email}
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          changeHandler={handleInputChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" variant="google" onClick={googleAuthHandler}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
