interface DataFormat {
  heading: string;
  content: string;
  id: string;
}

class Data implements DataFormat {
  heading: string;
  content: string;
  id: string;
  constructor(heading: string, content: string, id: string) {
    this.heading = heading;
    this.content = content;
    this.id = id;
  }
}

export default Data;
