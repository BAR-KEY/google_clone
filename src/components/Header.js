import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import GoogleApp from "./GoogleApp";
import Login from "./Login";

const Header = () => {
  return (
    <NavContainer>
      <NavLeft>
        <NavButton text={"Google 정보"} />
        <NavButton text={"스토어"} />
      </NavLeft>
      <NavRight>
        <NavButton text={"Gmail"} />
        <NavButton text={"이미지"} />
        <GoogleApp />
        <Login />
      </NavRight>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px;
  align-items: center;
`;
const NavLeft = styled.div`
  display: flex;
`;
const NavRight = styled.div`
  display: flex;
`;

export default Header;
