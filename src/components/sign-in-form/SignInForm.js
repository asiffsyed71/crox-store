import React, { useEffect, useState } from "react";
import Button, { CUSTOM_BUTTON_CLASSNAMES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import {
  selectCurrentUser,
  selectUserError,
} from "../../store/user/user.selector";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const error = useSelector(selectUserError);
  useEffect(() => {
    if (user) {
      navigate("/shop");
    }
    if (error) {
      switch (error.code) {
        case "auth/popup-closed-by-user":
          alert("Google Sign In cancelled!");
          break;
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
  }, [user, error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const googleAuthHandler = () => {
    dispatch(googleSignInStart());
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
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
          <Button
            type="button"
            variant={CUSTOM_BUTTON_CLASSNAMES.google}
            onClick={googleAuthHandler}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
