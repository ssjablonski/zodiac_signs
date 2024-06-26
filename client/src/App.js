import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ZodiacDescription from "./ZodiacDescription";
import Zodiac from "./Zodiac";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Sprawdź swoj znak zodiaku!</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/otherpage">Zodiac Signs Descriptions</Link>
          </div>
        </header>
        <div>
          <Route exact path="/" component={Zodiac} />
          <Route path="/otherpage" component={ZodiacDescription} />
        </div>
      </div>
    </Router>
  );
}

export default App;
