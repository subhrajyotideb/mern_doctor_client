import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    dep_doctor_details: {},
};

export const GetDepDocDetails = createAsyncThunk("dep_id_wise_doc", async (id) => {
    try {
        const res = await axiosInstance.get(`departmentidwisedoctor/${id.id}`);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const DepidDocSlice = createSlice({
    name: "DepDocDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetDepDocDetails.pending, (state) => {
                state.status = "loading......";
                state.dep_doctor_details = {};
            })
            .addCase(GetDepDocDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.dep_doctor_details = payload;
            })
            .addCase(GetDepDocDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


