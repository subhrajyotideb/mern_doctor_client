import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    dep_doctors_details: {},
};

export const GetAllDoctorsbyDEP = createAsyncThunk("/departmentidwisedoctor", async (id) => {
    try {
        const res = await axiosInstance.get(`departmentidwisedoctor/${id}`);
        console.log('GetAllDoctorsbyDEP---->',res?.data);
        return res?.data;
        
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const AllDoctorByDepSlice = createSlice({
    name: "AllDoctors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllDoctorsbyDEP.pending, (state) => {
                state.status = "loading......";
                state.dep_doctors_details = {};
            })
            .addCase(GetAllDoctorsbyDEP.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.dep_doctors_details = payload;
            })
            .addCase(GetAllDoctorsbyDEP.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


