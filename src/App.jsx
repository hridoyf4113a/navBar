import React, { useState } from "react";
import Navbar from "./Navbar";
import ModalPage from "./ModalPage";
import { Data } from "./Context/Data";

function App() {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState(false);
  return (
    <>
      <Data.Provider value={{ modal, setModal, mode, setMode }}>
        <div className={`mainPage ${mode ? "light" : "dark"}`}>
          <Navbar />
          <div className="homePage">
            <pre className="some">s o m e o n e t a k e m e ..</pre>
            <h1 className="home">HOME</h1>
          </div>
        </div>
        <ModalPage />
      </Data.Provider>
    </>
  );
}

export default App;
