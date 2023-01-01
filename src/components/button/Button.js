import React from "react";
import "./button.styles.scss";

const CUSTOM_BUTTON_CLASSNAMES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = (props) => {
  const { children: content, type, variant } = props;

  return (
    <button
      className={`button-container ${
        variant && CUSTOM_BUTTON_CLASSNAMES[variant]
      }`}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
