import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Bird from "./Bird";
import Form from "./Form";
import birds from "./birds.json";
import Home from "./Home";
import "./App.css";

function App() {
  const [birdJson, setBirdJson] = useState(birds);

  const addBird = (bird) => {
    setBirdJson((oldArray) => [...oldArray, bird]);
  };

  return (
    <div className="App">
      <div className="header-container">
        <Link className="link" to="/">
          <h1>Audubon Society</h1>
        </Link>
      </div>
      <Route exact path="/">
        <Home />
        <div className="bird-container">
          {birdJson.map((bird) => (
            <Link to={`/birds/${bird.name}`}>
              <img className="indiv-bird" src={bird.image} alt={bird.name} />
            </Link>
          ))}
        </div>
      </Route>
      <Route path="/new">
        <Form onSubmit={addBird} />
      </Route>
      <Route path="/birds/:name">
        <Bird birds={birdJson} />
      </Route>
    </div>
  );
}

export default App;
