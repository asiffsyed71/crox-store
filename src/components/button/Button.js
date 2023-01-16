import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const CUSTOM_BUTTON_CLASSNAMES = {
  base: "base",
  inverted: "inverted",
  google: "googleSignIn",
};

export const getButton = (buttonType = CUSTOM_BUTTON_CLASSNAMES.base) => {
  const buttonVariants = {
    [CUSTOM_BUTTON_CLASSNAMES.base]: BaseButton,
    [CUSTOM_BUTTON_CLASSNAMES.inverted]: InvertedButton,
    [CUSTOM_BUTTON_CLASSNAMES.google]: GoogleSignInButton,
  };
  return buttonVariants[buttonType];
};

const Button = ({ children: content, variant, ...otherProps }) => {
  const CustomButton = getButton(variant);
  return <CustomButton {...otherProps}>{content}</CustomButton>;
};

export default Button;
