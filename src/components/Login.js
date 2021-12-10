import React from "react";
import styled from "styled-components";

const Login = () => {
  return <StyledLogin>로그인</StyledLogin>;
};

const StyledLogin = styled.button`
  display: flex;
  width: 85px;
  height: 35px;
  background-color: #1a73e8;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0px;
  cursor: pinter;
  font-size: 14px;
`;

export default Login;
