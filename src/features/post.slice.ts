import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '../interfaces/IPost';
import { AxiosApiClient } from '../helpers/AxiosApiClient';

interface PostState {
  posts: IPost[];
  inProgress: IPost[];
  completed: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  inProgress: [],
  completed: [],
  loading: false,
  error: null,
};

export const getPost = createAsyncThunk<IPost[]>('post/getPost', async () => {
  const response = await AxiosApiClient.get('todos');
  return response.data.todos;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;

        state.inProgress = action.payload.filter(post => !post.completed);
        state.completed = action.payload.filter(post => post.completed);
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export default postSlice.reducer;
