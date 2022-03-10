import React, { useContext } from "react";

import Validity from "../state/Validity";

import classes from "./Button.module.css";

interface PropType {
  label: string;
  onClickBtn: () => void;
}

const Button = function (props: PropType) {
  const { isInputValid, isTextAreaValid } = useContext(Validity);

  // what happens on clicking button
  const clickHandler = function (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    props.onClickBtn();
  };

  return (
    <button
      onClick={clickHandler}
      disabled={!isInputValid || !isTextAreaValid}
      className={`${classes["add-btn"]} ${
        !isInputValid || !isTextAreaValid ? classes["invalid-btn"] : ""
      }`}
    >
      {props.label}
    </button>
  );
};

export default Button;
