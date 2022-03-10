import React, { useState } from "react";
import TextArea from "./TextArea";
import Input from "./Input";
import Button from "../components/Button";

import Data from "../utility/Data";

import Validity from "../state/Validity";
import DataTransfer from "../state/DataTransfer";

import classes from "./Form.module.css";

interface PropType {
  getData: (data: Data) => void;
}

const Form = function (props: PropType) {
  const [isInputvalid, setIsInputValid] = useState(false);
  const [isContentValid, setIsContentValid] = useState(false);
  const [noteHeading, setNoteHeading] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [id, setId] = useState(1);
  const [clear, setClear] = useState(false);

  // collecting data from input element
  const inputValue = function (headingIpt: string) {
    setIsInputValid(headingIpt.trim().length > 0 ? true : false);
    setNoteHeading(headingIpt);
  };

  // collecting data from textarea
  const textValue = function (content: string) {
    setIsContentValid(content.trim().length > 0);
    setNoteContent(content);
  };

  // collecting info when btn gets clicked
  const btnClickHandler = function () {
    const newData: Data = new Data(noteHeading, noteContent, "a" + id);
    props.getData(newData);
    setId((id) => id + 1);

    // to clear fields after sendint to app
    setClear((clear) => !clear);
  };

  return (
    <Validity.Provider
      value={{ isInputValid: isInputvalid, isTextAreaValid: isContentValid }}
    >
      <form action="" className={classes["form-notes"]}>
        <Input
          type="text"
          label="add heading"
          onChangeIpt={inputValue}
          clear={clear}
        />
        <TextArea
          type="text"
          label="add content"
          onChangeText={textValue}
          clear={clear}
        />
        <Button label="add" onClickBtn={btnClickHandler}></Button>
      </form>
    </Validity.Provider>
  );
};

export default Form;
