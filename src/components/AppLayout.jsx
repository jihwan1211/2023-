import React from "react";
import styled from "styled-components";

import Container from "@mui/material/Container";

import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MyContainer>
        <br />
        {children}
      </MyContainer>
    </>
  );
};

const MyContainer = styled(Container)`
  height: 100vh;
  overflow: auto;
  /* border: 1px solid black; */
  position: relative;
  height: 100vh;
  && {
    padding: 0;
    max-width: 1400px;
  }
`;

export default AppLayout;
