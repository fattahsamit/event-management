import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 md:w-3/4 mx-auto sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to={"/"}>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/services"}>Services</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/booking"}>Booking</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/contact"}>Contact</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/about"}>About</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/login"}>Login</ActiveLink>
            </li>
          </ul>
        </div>
        <h2 className="btn btn-ghost text-primary normal-case text-2xl">
          Event Management
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex text-lg">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to={"/"}>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/services"}>Services</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/booking"}>Booking</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/contact"}>Contact</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/about"}>About</ActiveLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex text-lg">
        <Link to={"/login"}>
          <button className="btn btn-primary text-white">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
