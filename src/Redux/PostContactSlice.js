import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";
import { toast } from "react-toastify";




export const PostContact = createAsyncThunk("contact", async (data) => {
  try {
    const res = await axiosInstance.post("createcontact",data);
    console.log('===>',res?.data);
    
    return res?.data;
    
    
  } catch (error) {
    
    throw error;
  }
});



const initialState = {
  contact: null,
  loading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
        toast(action?.payload?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(PostContact.rejected, (state, action) => {
        state.loading = false;
        toast.error("You already sent a message to us!",{
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});



