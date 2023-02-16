import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchHandler } from "../../features/userSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="search">
        <input
          type="text"
          onChange={(e) => dispatch(searchHandler(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Search;
