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

  return (
    <section id="nav-bar-container">
      <ul id="nav-bar">
        {rest.map((name, index) => {
          return (
            <div key={index}>
              <Link to={`/restaurant/${name}`}>{name.replaceAll('-', ' ')}</Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default NavBar
