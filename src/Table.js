import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  state = {
    personal: [
      { name: "Stina", role: "Systemtekniker" },
      { name: "Nisse", role: "Programmerare" },
    ],
    lon: "",
  };

  addRow = (e) => {
    let newPersonal = { name: "firstname", role: "jobtitle" };

    console.log("addRow",this.state);

    this.setState((state)=>({
      personal: [newPersonal, ...state.personal],
    }));
  };

  handleChange = (e) => {
    let thelon = e.target.value;
    console.log("handleChange", this.state);
    this.setState((state)=>({ 
            //personal: [ ...state.personal ],
            lon: thelon 
          }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-div">
          <button className="row-button" onClick={this.addRow}>Lägg till rad</button> <br></br>
        </div>
        <table className="table-style" id="personal">
          <thead>
            <tr>
              <th>Namn</th>
              <th>Jobb</th>
            </tr>
          </thead>

          <tbody>
            {this.state.personal.map((row, index) => {
              return (
                <TableRow
                  name={row.name}
                  role={row.role}
                  key={row.name + index}
                />
              );
            })}
          </tbody>
        </table>
        <hr></hr>
        <div>
          <input
                className="form-input-text"
                type="text"
                id="usernamn"
                name="usernamn"
                onChange={this.handleChange}
              ></input>
          <h1>{this.state.lon}</h1>
        </div>
      </React.Fragment>
    );
  }
}
export default Table;
