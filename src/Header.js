import React from "react";
import "./Header.css";

/*
  TODO: Complete the header
*/

function Header({
  name = "Unknown Name",
  birthday = "Unknown birthday",
  imageSrc = "",
}) {
  return (
    <header>
      <img src={imageSrc} alt="A very cute kitty"/>
      <div>
        <h1>{name}</h1>
        <h2>Birthday: {birthday}</h2>
      </div>
    </header>
  );
}

export default Header;
