export const search = (value) => async (dispatch) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=b9e96893&s=${value}`
  );
  const result = await res.json();
  dispatch({ type: "SEARCH", data: result.Search });
};

export const clear = () => (dispatch) => {
  console.log("clear");
  dispatch({ type: "CLEAR" });
};

export const sort = () => (dispatch) => {
  dispatch({ type: "SORT" });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({ type: "DELETE", id });
};

export const save = (id, title) => (dispatch) => {
  dispatch({ type: "UPDATE_TITLE", id, title });
};
