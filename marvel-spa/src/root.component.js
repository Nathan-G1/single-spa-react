import React, { useEffect, useState } from "react";
import "./root.component.css";

export default function Root() {
  const [marvels, setMarvels] = useState([]);

  useEffect(() => {
    // Gets marvels from the server
    const getMarvels = async () => {
      const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=527e4827d00ab91406830a1250fad9cb');
      const data = await response.json();
      setMarvels(data.data.results);
      console.log(data.data.results);
    };
    getMarvels();
  }, []);

  return (
    <div className="container1">
      <p>Marvels</p>
      <ul>
        {marvels.map(marvel => (
          <div className="card">
            <img src={marvel.thumbnail.path} alt={marvel.name} style="width:100%" />
              <div className="container">
                <h4><b>{marvel.name}</b></h4>
                <p>{marvel.description}</p>
              </div>
          </div>
        ))}
      </ul>
    </div>
  );
}