import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [getMessage, setGetMessage] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/flask/hello")
      .then((response) => {
        console.log("success");
        setGetMessage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {getMessage.status === 200 ? (
          <h3> {getMessage.data.message}</h3>
        ) : (
          <h3> Loading</h3>
        )}
      </div>
    </div>
  );
}

export default App;
