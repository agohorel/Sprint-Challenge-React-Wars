import React from "react";
import styled from "styled-components";

export const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <Wrapper>
        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          type="text"
          placeholder="filter list"
        ></Input>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 0 2rem;
  margin: 2rem 0 1rem 0;
`;

const Input = styled.input`
  background: #2f3136;
  border: none;
  padding: 5px;
  font-family: "IBM Plex Mono";
  color: white;
  width: 24%;

  &::placeholder {
    color: #bbb;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 97.5%;
  }
`;
