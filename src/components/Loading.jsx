import React from "react";
import styled from "styled-components";

import CircularProgress from "@mui/material/CircularProgress";
const Loading = () => {
  return (
    <CircularProgressWrapper>
      <CircularProgress />
    </CircularProgressWrapper>
  );
};

const CircularProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loading;
