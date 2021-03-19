import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((data) => this.setState(data));
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          {this.state.data.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
