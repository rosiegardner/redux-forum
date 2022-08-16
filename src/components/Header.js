import React from "react";
import cryptImage from "./../img/cryptForum.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Discussion Forum</h1>
      <img src={cryptImage} alt="tales from the crypt" />
    </React.Fragment>
  );
}

export default Header;