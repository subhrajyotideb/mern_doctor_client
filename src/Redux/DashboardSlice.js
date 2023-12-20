import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    user_dash: [],
};


export const GetDashboard = createAsyncThunk("UserDashboard", async (id) => {
    try {
        const res = await axiosInstance.get(`userdash/${id}`);
        console.log('DashBoard======>',res?.data);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});


export const UserDashSlice = createSlice({
    name: "UserDash",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetDashboard.pending, (state) => {
                state.status = "loading......";
                state.user_dash = {};
            })
            .addCase(GetDashboard.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.user_dash = payload;
            })
            .addCase(GetDashboard.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


