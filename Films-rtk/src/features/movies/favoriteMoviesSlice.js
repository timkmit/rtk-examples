import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const isAlreadyAdded = state.movies.find(
        (movie) => movie.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.movies.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
