import { useState, useEffect } from "react";
import RegionSelector from "../src/RegionSelector";
import CountryCard from "./components/CountryCard";
import "./styles.css";

function App() {
  const [region, setRegion] = useState("europe");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region]);

  return (
    <div className="App">
      <header>
        <h1>Countrix</h1>
        <RegionSelector onChange={setRegion} />
      </header>
      <div className="countries">
        {countries.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
