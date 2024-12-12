import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Data } from "./Context/Data";
import { useContext } from "react";

export default function Navbar() {
  const handleClick = () => {
    value.setModal(true);
  };
  const value = useContext(Data);

  const click = () => {
    value.setMode(!value.mode);
  };
  return (
    <div className="nav">
      <h1 className="arcane">ARCANE</h1>
      <span className="navItems">
        <Link to={"/"}>Home</Link>
      </span>
      <span className="navItems">
        {" "}
        <Link to={"/docs"}>Docs</Link>
      </span>
      <span className="navItems">
        {" "}
        <Link to={"/todo"}>Make To-Do</Link>
      </span>
      <span className="navItems">
        <Link to={"/about"}>About</Link>
      </span>
      <span className="navItems">
        <Link to={"/help"}>Help</Link>
      </span>
      <Search />
      <div className="joining">
        <button onClick={click} className="mode">
          Mode
        </button>
        <button className="logSign login">Login</button>
        <button onClick={handleClick} className="logSign signUp">
          Sign Up
        </button>
      </div>
    </div>
  );
}
