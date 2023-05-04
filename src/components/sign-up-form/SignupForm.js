import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import { useNavigate } from "react-router-dom";
import "./sign-up-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";


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
  useEffect(() => {
    if(user) {
      navigate('/shop')
    }
  },[user])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpStart(email,password,displayName))
    // if (password !== confirmPassword) {
    //   alert("passwords don't match");
    //   return;
    // }
    // try {
    //   const { user } = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserDocFromAuth(user, { displayName });
    //   setFormFields(defaultFields);
    //   navigate("/shop")
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     alert("Email Id already in use.");
    //   }
    // }
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
