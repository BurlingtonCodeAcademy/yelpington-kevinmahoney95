import React from "react";
import { useState } from "react"
import Map from "./Map"
import NavBar from "./nav"



function Home(props) {
  const [center, setCenter] = useState([40.7128, -73.955]);

  return (
    <div>
      <h1>Yelpington!</h1>
      <NavBar />
      <Map center={center} />
    </div>
  );
}

export default Home;
