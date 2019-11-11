import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import AddBook from "./components/AddBook";

// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/addbook" component={AddBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
