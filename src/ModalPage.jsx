import React from "react";
import SignUp from "./SignUp";
import { Data } from "./Context/Data";
import { useContext } from "react";

export default function ModalPage() {
  const value = useContext(Data);
  return (
    <div className={`modalPage ${value.modal ? "" : "hide"}`}>
      <div className="modal">
        <SignUp />
      </div>
    </div>
  );
}
