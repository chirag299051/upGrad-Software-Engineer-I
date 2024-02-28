import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { sort } from "../store/actions";

const List = ({ view }) => {
  const { movies } = useSelector((state) => state?.reducer);
  const dispatch = useDispatch();

  const handleSort = () => {
    dispatch(sort());
  };

  return (
    movies && (
      <div className="list">
        <div className="list-wrapper">
          <h3 className="heading">List of Movies/TV Shows</h3>
          <button className="btn-sort" onClick={handleSort}>
            &nbsp; Sort &nbsp;
          </button>
        </div>

        <table className="table">
          <thead>
            <tr className="table-headings">
              <th>I.D</th>
              <th>Poster</th>
              <th>Title</th>
              <th>Year</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="items">
            {movies?.map((item) => (
              <Item key={item.imdbID} view={view} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default List;
