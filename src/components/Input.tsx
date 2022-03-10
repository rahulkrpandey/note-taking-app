import React, { Fragment, useEffect, useState } from "react";
import classes from "./Input.module.css";

interface PropType {
  type: string;
  label: string;
  onChangeIpt: (headingIpt: string) => void;
  // clearForm: () => string;
  clear: boolean;
}

const Input = function (props: PropType) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const changeHandler = function (event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    setValid(event.target.value.trim().length > 0);
  };

  const focusHandler = function (event: React.FocusEvent<HTMLInputElement>) {
    setTimeout(() => {
      setValid(event.target.value.trim().length > 0);
    }, 500);
  };

  // for validation and
  // if input is valid pass the data to the form
  useEffect(() => {
    const timer = setTimeout(() => {
      // setValid(value.length > 0);
      props.onChangeIpt(value);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("");
    }, 100);
  }, [props.clear]);

  return (
    <Fragment>
      <label
        className={classes["heading-label"]}
        htmlFor={classes["heading-note"]}
      >
        {props.label}
      </label>
      <input
        // autoFocus
        onChange={changeHandler}
        onFocus={focusHandler}
        // className={classes["heading-note"]}
        className={`${classes["heading-note"]} ${
          !valid ? classes["invalid"] : ""
        }`}
        type={props.type}
        value={value}
      />
    </Fragment>
  );
};

export default Input;
