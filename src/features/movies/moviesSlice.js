import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const MovieSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = MovieSlice.actions;

// state.[name of the slice].[ property we want to export ].
// export const getAllMovies = (state) => state.movies;

export default MovieSlice.reducer;
