import React from "react";
import { useState, useEffect } from "react";
import Map from "./Map";

function RestaurantPage(props) {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restaurantId, setRestaurantId] = useState(null);
  const [center, setCenter] = useState([40.7, -73.98]);
  

  //Fetches restaurant info from API
  useEffect(() => {
    if (restaurantId !== props.match.params.id) {
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restaurantInformation) => {
          setRestaurantInfo(restaurantInformation);
          setRestaurantId(props.match.params.id);
        });
    }
  });

  //Returns restaurant info in sidebar. New center does not work
  return (
    <>
    {/* div to wrap info and map in flex box */}
      <div class="main">
        <span id="restaurant-info">
          <h2 class="restaurant-info">{restaurantInfo.name}</h2>
          <h5 class="restaurant-info">Address: {restaurantInfo.address}</h5>
          <h5 class="restaurant-info">Phone Number: {restaurantInfo.phone}</h5>
          <h5 class="restaurant-info">Hours: {restaurantInfo.hours}</h5>
          <p class="restaurant-info">Notes: {restaurantInfo.notes}</p>
        </span>
        {/* still need to get this to go to new center and zoom */}
         <Map center={center} /> 
      </div>
    </>
  );
}

export default RestaurantPage;
