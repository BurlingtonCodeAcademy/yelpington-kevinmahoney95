import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import { useState } from "react";
import Map from "./components/Map";
import NavBar from "./components/nav";
import "./App.css";

function App() {
  const [center, setCenter] = useState([40.7128, -73.955]);

  return (
    <div>
      <h1>The Best Food and Drink in NYC</h1>
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
      <NavBar />
      <Map center={center} />
    </div>
  );
}

export default App;
