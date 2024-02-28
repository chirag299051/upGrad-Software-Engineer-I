import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { clear, search } from "../store/actions";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(search(value));
    setValue("");
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className="search-wrapper">
      <h3 className="heading">Search for Movie/TV title</h3>
      <div className="search">
        <form>
          <input
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <button className="btn" onClick={handleSubmit}>
          Apply
        </button>
        <button className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Search;
