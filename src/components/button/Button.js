import React from "react";
import "./button.styles.scss";

const CUSTOM_BUTTON_CLASSNAMES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ children: content, variant, ...otherProps }) => {
  return (
    <button
      className={`button-container ${
        variant && CUSTOM_BUTTON_CLASSNAMES[variant]
      }`}
      {...otherProps}
    >
      {content}
    </button>
  );
};

export default Button;
