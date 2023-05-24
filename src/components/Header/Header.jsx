import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <h2>Logo</h2>
      </div>
      <ul>
        <ActiveLink to={"/"}>Home</ActiveLink>
        <ActiveLink to={"/about"}>About</ActiveLink>
        <ActiveLink to={"/booking"}>Booking</ActiveLink>
        <ActiveLink to={"/contact"}>Contact</ActiveLink>
        <ActiveLink to={"/services"}>Services</ActiveLink>
      </ul>
    </nav>
  );
};

export default Header;
