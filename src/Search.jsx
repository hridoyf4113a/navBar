import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    alert(search);
    setSearch("");
  };
  return (
    <>
      <form>
        <div className="search">
          <input
            value={search}
            onChange={handleChange}
            className="searchInput"
            type="text"
          />
          <button onClick={handleClick} className="searchBtn">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
