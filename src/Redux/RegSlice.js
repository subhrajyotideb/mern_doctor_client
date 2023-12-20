import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../Api/apiUrl";




export const register = createAsyncThunk("user/register", async (data) => {
  try {
    const response = await axiosInstance.post("register", data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
});




export const RegSlice = createSlice({
  name: "USER",
  initialState: {
    UserData: {},
    loading: false,
    redirectReg: null,
  },
  reducers: {
    redirectTooo: (state, { payload }) => {
      state.redirectReg = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.redirectReg = '/login';
        toast(action?.payload?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        // state.redirectReg = '/login';
        toast("Email Already Exists!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  },
});

export const { redirectTooo } = RegSlice.actions;
