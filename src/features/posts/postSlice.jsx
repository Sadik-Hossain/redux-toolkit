import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//* fetching er kaj cra createAsyncThunk("posts/fetchPosts",...})
//* reducer er name: posts
//* action fetchpost
//* eta builder er madhomme access kora hoy
//* extraReducer: (builder)=>{}
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postSlice = createSlice({
  //* reducer name
  name: "posts",
  //* initial state
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    //* promise (pending, fulfilled, rejected)
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
