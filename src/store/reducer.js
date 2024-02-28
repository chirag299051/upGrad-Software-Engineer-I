const initState = {
  movies: [],
};

const reducer = (state = initState, action) => {
  if (action.type === "SEARCH") {
    return { ...state, movies: action.data };
  }
  if (action.type === "CLEAR") {
    return { ...state, movies: [] };
  }
  if (action.type === "SORT") {
    return {
      ...state,
      movies: state.movies.slice().sort((a, b) => (a.Title > b.Title ? 1 : -1)),
    };
  }
  if (action.type === "DELETE") {
    const newMovies = state.movies.filter((x) => x.imdbID !== action.id);
    return { ...state, movies: newMovies };
  }
  if (action.type === "UPDATE_TITLE") {
    const tempMovies = state.movies.filter((x) => x.imdbID !== action.id);
    let movie = state.movies.find((x) => x.imdbID === action.id);
    movie = { ...movie, Title: action.title };
    tempMovies.push(movie);

    return { ...state, movies: tempMovies };
  }
  return state;
};

export default reducer;
