import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    data: [],
    selected: [],
  };

  handleSelect = (user) => {
    if (this.state.selected.includes(user)) {
      const newSelected = this.state.selected.filter((u) => u !== user);
      this.setState({ selected: newSelected });
    } else this.setState({ selected: [...this.state.selected, user] });
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
            <Card
              key={user.id}
              user={user}
              handleSelect={this.handleSelect}
              selected={this.state.selected}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
