import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import { Layout } from "./components/Layout";
import { Card } from "./components/Card";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Layout>
        {characters.map(character => {
          return <Card key={character.created} data={character}></Card>;
          // return null;
        })}
      </Layout>
    </div>
  );
};

export default App;
