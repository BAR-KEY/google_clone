import React from "react";
import NavButton from "./NavButton";

const NavRight = () => {
  return (
    <div>
      <NavButton text={"Gmail"} />
      <NavButton text={"이미지"} />
      <NavButton text={"Google 앱"} />
      <NavButton text={"로그인"} />
    </div>
  );
};

export default NavRight;
