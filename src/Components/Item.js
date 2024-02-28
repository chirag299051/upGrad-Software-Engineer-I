import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/actions";

const Item = ({ item, view }) => {
  const dispatch = useDispatch();

  const del = (e, id) => {
    e.stopPropagation();
    dispatch(deleteItem(id));
  };

  return (
    <tr className="item" onClick={() => view(item.imdbID, item.Title)}>
      <td>{item.imdbID}</td>
      <td>
        <img src={item.Poster}></img>
      </td>
      <td>{item.Title}</td>
      <td>{item.Year}</td>
      <td>
        <MdDeleteForever
          onClick={(e) => del(e, item.imdbID)}
          size={30}
          color="red"
        />
      </td>
    </tr>
  );
};

export default Item;
