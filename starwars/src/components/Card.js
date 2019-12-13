import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const Card = ({ data: { name, films, eye_color } }) => {
  const [filmList, setFilmList] = useState([]);

//   useEffect(() => {
//     films.map(filmUrl => {
//       axios
//         .get(filmUrl)
//         .then(res => setFilmList(prevState => [...prevState, res.data]))
//         .catch(err => console.error(err));
//     });
//   }, []);

  return (
    <SWCard>
      <h2>{name}</h2>
      <EyeText>
        Eye Color: <EyeSpan color={eye_color}>{eye_color}</EyeSpan>
      </EyeText>
      <h3>Appears in {films.length} films:</h3>
      {filmList.map(film => {
        return <FilmTitle key={film.created}>{film.title}</FilmTitle>;
      })}
    </SWCard>
  );
};

const SWCard = styled.div`
//   background-color: #b5bbc4;
  background-color: #1c1c1c;
  width: 24%
  margin: 1%;
  min-height: 400px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .25);
  border-radius: 3px;

   h2, h3 {
       color: white;
   }

   @media (max-width: 1200px){
       width: 48%;
   }

   @media (max-width: 500px){
       width: 100%;
   }
`;

const EyeSpan = styled.span`
  color: ${props => props.color};
`;

const EyeText = styled.p`
  padding: 5px;
  background-color: #2f3136;
  color: white;
`;

const FilmTitle = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: white;
`;
