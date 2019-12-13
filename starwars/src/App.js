import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";

import { Layout } from "./components/Layout";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(filter);
    });

    setFilterResults(results);
  }, [characters, filter]);

  return (
    <div className="App">
      <Header>React Wars</Header>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Layout>
        {filterResults.map(character => {
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
