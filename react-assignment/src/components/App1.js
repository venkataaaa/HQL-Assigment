import React, { useState, useEffect } from "react";

export default function App1() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    componentDidMount(() => {
      fetch("https://reqres.in/api/users/").then((response) => response.json());
      const { state } = data.response[0].then((data) => setstate());
    });
  }, []);
  return (
    <div>
      var{state}=this.state
      <div className="container">
        {state.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
