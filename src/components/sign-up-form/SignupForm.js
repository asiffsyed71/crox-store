import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { useNavigate } from "react-router-dom";
import "./sign-up-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { selectCurrentUser, selectUserError } from "../../store/user/user.selector";


const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {

  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const error = useSelector(selectUserError);
  useEffect(() => {
    if(user) {
      navigate('/shop')
    }
    if (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already in use!!");
          break;
        default:
          console.log(error);
      }
    }
  },[user,error])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpStart(email,password,displayName))
  };

  return (
    <div className="sign-up-form-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          id="displayName"
          name="displayName"
          type="text"
          required={true}
          changeHandler={handleInputChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required
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
        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          minLength={6}
          changeHandler={handleInputChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
