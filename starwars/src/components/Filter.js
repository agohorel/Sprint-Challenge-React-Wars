import React from "react";

export const Filter = ({ filter, setFilter }) => {
  return (
    <>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        type="text"
        placeholder="filter list"
      ></input>
    </>
  );
};
