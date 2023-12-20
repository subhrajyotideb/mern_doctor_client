import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";
import { toast } from "react-toastify";




export const PostComment = createAsyncThunk("PostBlogComment", async (data) => {
  try {
    const res = await axiosInstance.post("createblogcomment",data);
    console.log('===>',res?.data);
    
    return res?.data;
    
    
  } catch (error) {
    
    throw error;
  }
});



const initialState = {
  comment: null,
  loading: false,
  error: null,
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostComment.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
        toast(action?.payload?.message,{
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(PostComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast("You have to login first!",{
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});



