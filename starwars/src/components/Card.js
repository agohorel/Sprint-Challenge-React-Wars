import React from "react";
import styled from "styled-components";

export const Card = ({ data }) => {
  console.log(data);
  return <CardContainer></CardContainer>;
};

const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
