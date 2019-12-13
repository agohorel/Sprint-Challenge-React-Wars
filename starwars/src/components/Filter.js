import React from "react";
import styled from "styled-components";

export const Filter = ({ filter, setFilter, currentPage, setCurrentPage }) => {
  return (
    <>
      <Wrapper>
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          type="text"
          placeholder="filter list"
        ></Input>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </Wrapper>
    </>
  );
};

const Button = styled.button`
  border: none;
  background-color: #2f3136;
  color: #bbb;
  border-radius: 3px;
  padding: 1rem 2rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  margin: 2rem 0 1rem 0;

  @media (max-width: 500px) {
    justify-content: space-between;
  }
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
    margin: 1rem 0;
    order: 1;
  }
`;
