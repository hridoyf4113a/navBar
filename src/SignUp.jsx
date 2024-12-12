import React, { useState, useContext } from "react";
import { Data } from "./Context/Data";

function SignUp() {
  const value = useContext(Data);

  const handleClick = (event) => {
    event.preventDefault();
    value.setModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="signModal">
      <form>
        <p className="c">Enter username ..</p>
        <input className="inp inpt" type="text" />
        <br />
        <p className="c">Enter password ..</p>
        <input className="inp inpt" type="password" />
        <br />
        <input
          onClick={handleSubmit}
          className="inp inps mt"
          type="submit"
          placeholder="Submit"
        />
        <br />
        <button onClick={handleClick} className="inp inps">
          Close
        </button>
      </form>
    </div>
  );
}

export default SignUp;
