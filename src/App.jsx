import "./App.css";
import { useState, useEffect } from "react";
import imgFondo from "./assets/bg-cafe-sm.jpg";
import CoffeeCard from "../components/CoffeeCard.jsx";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  const filteredCoffees = onlyAvailable
    ? coffees.filter((coffee) => coffee.available)
    : coffees;

  return (
    <div className="main-container">
      <img className="background-image" src={imgFondo} alt="Coffee shop" />

      <div className="overlay-content">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div className="buttons">
          <button
            onClick={() => setOnlyAvailable(false)}
            className={`btn ${!onlyAvailable ? "active" : ""}`}
          >
            All Products
          </button>
          <button
            onClick={() => setOnlyAvailable(true)}
            className={`btn ${onlyAvailable ? "active" : ""}`}
          >
            Available Now
          </button>
        </div>

        <div className="grid">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
