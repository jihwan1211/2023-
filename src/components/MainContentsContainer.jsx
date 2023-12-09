import React from "react";
import styled from "styled-components";

import KoBERT from "./KoBERT";

const MainContentContainer = () => {
  return (
    <Div>
      <KoBERT />
    </Div>
  );
};

const Div = styled.div`
  position: relative;
`;

export default MainContentContainer;
