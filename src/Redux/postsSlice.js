import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: true,
    cartItems: []
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePosts: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addCartItems: (state, action) => {
      const exist = state.cartItems.some(item => item.id === action.payload.id)
      if (!exist) {
        state.cartItems.push(action.payload)
      } 
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(post => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, removePosts, setLoading, addCartItems, removeCartItem} = postsSlice.actions;
export default postsSlice.reducer;
