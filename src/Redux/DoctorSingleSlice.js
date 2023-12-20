import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    doctor_details: {},
};

export const GetDoctorDetails = createAsyncThunk("doctordetails", async (id) => {
    try {
        const res = await axiosInstance.get(`doctordetails/${id.id}`);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const DoctorDetailsSlice = createSlice({
    name: "DoctorDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetDoctorDetails.pending, (state) => {
                state.status = "loading......";
                state.doctor_details = {};
            })
            .addCase(GetDoctorDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.doctor_details = payload;
            })
            .addCase(GetDoctorDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


