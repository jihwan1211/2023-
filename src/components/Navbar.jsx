import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <H1>사용자 감정상태에 맞는 향수 추천 서비스</H1>
      <br />
      <h4>향과 감정의 조화 - 맞춤 향수 추천</h4>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  position: sticky;
`;

const H1 = styled.h1`
  margin: 0 auto;
`;

export default Navbar;
