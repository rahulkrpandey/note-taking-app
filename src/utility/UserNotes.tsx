import { listenerCount } from "process";
import Accordion from "../components/Accordion";
import Data from "./Data";

import classes from "./UserNotes.module.css";

interface PropType {
  list: Data[];
  changeArray: (object: Data) => void;
}

const UserNotes = function (props: PropType) {
  // delete accordion by passing its object data refrence to the app
  let objRef: Data;
  const deleteAccordion = (id: string) => {
    props.list.forEach((item) => {
      if (item.id === id) objRef = item;
    });

    props.changeArray(objRef);
  };

  return (
    <div className={classes["user-notes"]}>
      {/* <Accordion /> */}
      {props.list.map((data) => (
        <Accordion
          heading={data.heading}
          content={data.content}
          id={data.id}
          key={data.id}
          deleteHandler={deleteAccordion}
        />
      ))}
    </div>
  );
};

export default UserNotes;
