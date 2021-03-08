import React from "react";
import { useState } from "react";
import Map from "./Map";
import NavBar from "./nav";

function Home(props) {
  //Set beginning center of map
  const [center, setCenter] = useState([40.70, -73.98]);

  //Return main content of home page (header, Nav Bar, and Map)
  return (
    <div>
      <header>
        <h1>NYC's Best Food and Drink</h1>
      </header>
      <div id="main">
        <NavBar />
        <Map center={center} />
      </div>
    </div>
  );
}

export default Home;
