import React from "react";
import styled from "styled-components";

export const Layout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
