import React from "react";
import styled from "styled-components";
import googleAppIcon from "../img/googleAppIcon.png";

const GoogleApp = () => {
  return <StyledGoogleApp></StyledGoogleApp>;
};

const StyledGoogleApp = styled.img.attrs({
  src: googleAppIcon,
})`
  display: flex;
  width: 18px;
  height: 18px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 20px;
    height: 20px;
    background-color: gray;
    color: black;
  }
`;
export default GoogleApp;
