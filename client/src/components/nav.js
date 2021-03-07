import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar(props) {
  const [rest, setRest] = useState([]);

  useEffect(() => {
    if (rest.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((allRest) => {
          setRest(allRest);
        });
    }
  });

  const capitalize = (name) => {
    let nameArray = name.split('-')
    nameArray = nameArray.map((name) => (name[0].toUpperCase() + name.slice(1)))
    return nameArray.join(" ")
  }

  return (
    <section id="nav-bar-container">
      <ul id="nav-bar">
        {rest.map((name, index) => {
          return (
            <div key={index}>
              <Link to={`/restaurant/${name}`}>{capitalize(name)}</Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default NavBar
