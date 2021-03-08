import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar(props) {
  const [rest, setRest] = useState([]);

  //Brings restaurant names in from json of all IDs
  useEffect(() => {
    if (rest.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((allRest) => {
          setRest(allRest);
        });
    }
  });

  //Capitalizes first letter of every word of restaurant name
  const capitalize = (name) => {
    let idArray = name.split('-')
    idArray = idArray.map((name) => (name[0].toUpperCase() + name.slice(1)))
    return idArray.join(" ")
  }

  //Creates nav bar of all IDs in ID json with links to a respective page
  return (
    <span id="nav-bar-container">
      <ul id="nav-bar">
        {rest.map((name, index) => {
          return (
            <div id="list-item" key={index}>
              <b><Link to={`/restaurant/${name}`}>{capitalize(name)}</Link></b>
            </div>
          );
        })}
      </ul>
    </span>
  );
}

export default NavBar
