import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
      <Header>React Wars</Header>
      <Layout>
        {characters.map(character => {
          return <Card key={character.created} data={character}></Card>;
        })}
      </Layout>
    </div>
  );
};

export default App;

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  color: black;
  background-color: white;
  padding: 5px;
`;
