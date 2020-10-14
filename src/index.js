import React from "react";
import ReactDOM from "react-dom";
import "./style/normalize.css"
import "./style/index.css";
import Table from "./Table";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="title-row">
          <h1>Hello, React!</h1>
          </div>
          <div className="table-wrapper">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
