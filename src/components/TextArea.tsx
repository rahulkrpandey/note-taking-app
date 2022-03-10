import React, {
  ChangeEventHandler,
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import classes from "./TextArea.module.css";

import Validity from "../state/Validity";

interface PropType {
  type: string;
  label: string;
  clear: Boolean;
  onChangeText: (content: string) => void;
}

// Conponent code
const TextArea = function (props: PropType) {
  // to check if input for heading is valid or not
  const validity = useContext(Validity);

  // value of text area
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // for text area to make it valid/invalid based on its content
  const [isContentValid, setIsContentValid] = useState(true);

  const changeHandler = function (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setValue(event.target.value);
    setIsContentValid(event.target.value.trim().length > 0);
  };

  // sending data to parent form through function call
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onChangeText(value);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  // clearing form
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("");
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [props.clear]);

  // When we focus text area what should happen
  const focusHandler = function (event: React.FocusEvent<HTMLTextAreaElement>) {
    setTimeout(() => {
      setIsContentValid(event.target.value.trim().length > 0);
    }, 500);
  };

  return (
    <Fragment>
      <label htmlFor="input-text" className={classes["input-label"]}>
        {props.label}
      </label>
      <textarea
        onChange={changeHandler}
        value={value}
        ref={textAreaRef}
        onFocus={focusHandler}
        className={`${classes["input-text"]} ${
          !isContentValid ? classes["invalid-content"] : ""
        }`}
      />
    </Fragment>
  );
};

export default TextArea;
//className={classes["input-label"]}
