import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import RestaurantPage from "./components/restaurant";
//import { useState } from "react";

import "./App.css";

function App() {
  //Set up paths for Home Page and Restaurant Page content.
  return (
    <div>
      <header>
        <a href="/">
          <h1>NYC's Best Food and Drink</h1>
        </a>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/restaurant/:id" component={RestaurantPage} />
      </Switch>
    </div>
  );
}

export default App;
