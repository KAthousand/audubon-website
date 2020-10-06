import React from "react";
import { Route, Link } from "react-router-dom";
import Bird from "./Bird";
import Form from "./Form";
import birds from "./birds.json";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Route exact path="/">
        <div className="bird-container">
          {birds.map((bird) => (
            <Link to={`/birds/${bird.name}`}>
              <img className="indiv-bird" src={bird.image} alt={bird.name} />
            </Link>
          ))}
        </div>
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Route path="/birds/:name">
        <Bird birds={birds} />
      </Route>
    </div>
  );
}

export default App;
