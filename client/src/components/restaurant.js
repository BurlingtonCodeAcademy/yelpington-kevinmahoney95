// import React from 'react';
// import { useState, useEffect } from 'react'
// // import Map from "./components/Map";

// function RestaurantPage(props) {
//   const [restaurantInfo, setRestaurantInfo] = useState({});
//   const [restaurantId, setRestaurantId] = useState(null);

//   useEffect(() => {
//     if (restaurantId !== props.match.params.id) {
//       fetch(`/api/${props.match.params.id}`)
//       .then((res) => res.json())
//       .then((restaurantInformation) => {
//         setRestaurantInfo(restaurantInformation);
//         setRestaurantId(props.match.params.id)
//       });
//     }
//   });

//   return (
//     <div>
//       <h2>{restaurantInfo.name}</h2>
//       <h6>{restaurantInfo.address}</h6>
//       <h6>{restaurantInfo.phone}</h6>
//       <h6>{restaurantInfo.hours}</h6>
//       <p>{restaurantInfo.notes}</p>
//     </div>
//   )
// }

// export default RestaurantPage

