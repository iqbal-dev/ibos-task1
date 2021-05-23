import React, { Component } from "react";
import AddFile from "./component/AddFile";
class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Ibos Limited</h1>
        <AddFile />
      </div>
    );
  }
}

export default App;
