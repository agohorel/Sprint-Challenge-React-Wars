import React from "react";
import styled from "styled-components";

export const Layout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
