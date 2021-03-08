import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import { useState } from "react";

// import RestaurantPage from './components/restaurant'
import "./App.css";

function App() {
  // const [center, setCenter] = useState([40.7128, -73.955]);

  //Set up links from home page
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
