import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovie = createAsyncThunk("getMovie", (page) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`
    )
    .then((res) => {
      return res.data;
    });
});

const moviePerPageSlice = createSlice({
  name: "moviePerPage",
  initialState: {
    data: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
export const { nextPage, prevPage } = moviePerPageSlice.actions;
export default moviePerPageSlice.reducer;
