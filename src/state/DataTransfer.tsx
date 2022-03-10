import React from "react";

interface DataFormat {
  heading: string;
  content: string;
  id: string;
}

class Data implements DataFormat {
  constructor(
    public heading: string,
    public content: string,
    public id: string
  ) {}
}

const DataTransfer = React.createContext({
  Data: new Data("", "", ""),
});

export default DataTransfer;
