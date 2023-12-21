import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../Api/apiUrl";




export const login = createAsyncThunk("/Login",async (data)=>{

   const response = await axiosInstance.post("login",data);
   console.log(response);
   return response;
})




export const LogSlice=createSlice({
   name:"userlogin",
   initialState:{
      userlogin:{},
      loading:false,
      redirectTo: null,
      Logouttoggle: false,
   },
   reducers:{
      check_token: (state, { payload }) => {
         let token = localStorage.getItem("token");
         if (token !== undefined && token !== null) {
           state.Logouttoggle = true;
         }
       },
       
      logout: (state, { payload }) => {
         localStorage.clear()
         state.Logouttoggle = false
       },

      redirectToo: (state, { payload }) => {
         state.redirectTo = payload
       },
   },
   extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, { payload }) => {
          if (payload?.status === 200) {
            localStorage.setItem("token", payload?.data?.token);
            localStorage.setItem("name", payload?.data?.data?.name);
            localStorage.setItem("image", payload?.data?.data?.image);
            localStorage.setItem("email", payload?.data?.data?.email);
            localStorage.setItem("phone", payload?.data?.data?.phone);
            localStorage.setItem("id", payload?.data?.data?._id);
    
            state.Logouttoggle = true;
            state.redirectTo = "/";
            toast(payload?.data?.message,{
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          toast.error("Wrong Email or Password or User is not verified!",{
            position: toast.POSITION.TOP_CENTER,
          });
        });
    },
    
})


export const { check_token, logout, redirectToo } = LogSlice.actions;
