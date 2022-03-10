import { useRef, useState } from "react";
import Button from "./Button";
import BtnDelete from "./BtnDelete";
import classes from "./Accordion.module.css";

interface PropType {
  heading: string;
  content: string;
  id: string;
  deleteHandler: (id: string) => void;
}

const Accordion = function (props: PropType) {
  const [hidden, setHidden] = useState<boolean>(true);
  const textRef = useRef<HTMLParagraphElement>(null);

  const clickHandler = function () {
    // textRef.current?.classList.toggle("hidden");
    setHidden((prevHidden) => !prevHidden);
  };

  const clickBtnHandler = () => {
    props.deleteHandler(props.id);
  };

  return (
    <div onClick={clickHandler} className={`${classes["accordion"]}`}>
      <div className={classes["content"]}>
        <h3 className={classes["content-heading"]}>{props.heading}</h3>
        <p
          ref={textRef}
          className={`${classes["content-text"]}  ${
            hidden ? `${classes["hidden"]}` : ""
          }`}
        >
          {" "}
          {props.content}{" "}
        </p>
      </div>

      <div className={classes["btn-container"]}>
        {/* <Button label="edit" onClickBtn={clickBtnHandler} /> */}
        {/* <Button label="delete" onClickBtn={clickBtnHandler} /> */}
        <BtnDelete onClickBtn={clickBtnHandler} />
      </div>
    </div>
  );
};

export default Accordion;
