import React from "react";

import classes from "./BtnDelete.module.css";

interface PropType {
  onClickBtn: () => void;
}

const BtnDelete = function (props: PropType) {
  const clickHandler = function () {
    props.onClickBtn();
  };

  return (
    <button className={classes["delete-btn"]} onClick={clickHandler}>
      delete
    </button>
  );
};

export default BtnDelete;
