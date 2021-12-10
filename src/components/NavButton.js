import React from "react";
import styled from "styled-components";

const NavButton = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

const StyledButton = styled.div`
  display: flex;
  padding: 5px 10px;
`;

export default NavButton;
