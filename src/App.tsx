import React, { useContext, useMemo, useState } from "react";
import UserInput from "./utility/UserInput";
import UserNotes from "./utility/UserNotes";

import Data from "./utility/Data";

import DataTransfer from "./state/DataTransfer";

import classes from "./App.module.css";

interface NotesFormat {
  heading: string;
  content: string;
  id: string;
}

function App() {
  // using context to get data directly from form

  const [notesArray, setNotesArray] = useState([
    useMemo(() => new Data("hi there", "this is content", "a0"), []),
    useMemo(() => new Data("my name is khan", "movie", "b0"), []),
    useMemo(() => new Data("tu mera bhai hai", "bakaity", "c0"), []),
  ]);

  const getDataFromUserNoteHandler = function (data: Data) {
    setNotesArray((prevNotes) => [...prevNotes, data]);
  };
  // console.log(notesArray);

  // changing array to delete component note
  const changeArrayHandler = function (object: Data) {
    setNotesArray((prevArray) => [
      ...prevArray.filter((data) => data != object),
    ]);
  };

  return (
    <div className="App">
      <UserInput getDataFromUserNote={getDataFromUserNoteHandler} />
      <UserNotes list={notesArray} changeArray={changeArrayHandler} />
    </div>
  );
}

export default App;
