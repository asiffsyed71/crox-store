import React, { useState } from "react";
import Button, {CUSTOM_BUTTON_CLASSNAMES} from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  signInWithEmailPassword,
} from "../../utils/firebase.util";
import { useNavigate } from "react-router-dom";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

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
    try {
      await signInWithGooglePopup();
      navigate('/shop')
    } catch (error) {
      if(error.code === 'auth/popup-closed-by-user') {
        alert('Google Sign In cancelled!')
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
      setFormFields(defaultFields);
      navigate('/shop');
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
          <Button type="button" variant={CUSTOM_BUTTON_CLASSNAMES.google} onClick={googleAuthHandler}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
