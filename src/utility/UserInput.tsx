import Form from "../components/Form";
import Data from "../utility/Data";

import classes from "./UserInput.module.css";

interface PropType {
  getDataFromUserNote: (data: Data) => void;
}

const UserInput = function (props: PropType) {
  // part of prop chain to transfer data from form to app
  const getDataHandler = function (data: Data) {
    props.getDataFromUserNote(data);
  };

  return (
    <div className={classes["form-container"]}>
      <Form getData={getDataHandler} />
    </div>
  );
};

export default UserInput;
