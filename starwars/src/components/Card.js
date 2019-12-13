import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const Card = ({ data: { name, films, eye_color } }) => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    films.map(filmUrl => {
      axios
        .get(filmUrl)
        .then(res => setFilmList(prevState => [...prevState, res.data]))
        // .then(console.log(filmList))
        .catch(err => console.error(err));
    });
  }, []);

  return (
    <SWCard>
      <h2>{name}</h2>
      <p>
        Eye Color: <EyeSpan color={eye_color}>{eye_color}</EyeSpan>
      </p>
      <p>Appears in {films.length} films:</p>
      {filmList.map(film => {
        return <p key={film.created}>{film.title}</p>;
      })}
    </SWCard>
  );
};

const SWCard = styled.div`
  background-color: #bbb;
  width: 24%
  margin: 1%;
  height: 500px;
`;

const EyeSpan = styled.span`
  color: ${props => props.color};
`;
