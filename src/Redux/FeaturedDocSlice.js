import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

export const GetFeaturedDoctor = createAsyncThunk("featured", async () => {
    try {
        const res = await axiosInstance.get('featured');
        return res?.data;
    } catch (error) {
        console.error("Error fetching featured doctor:", error);
        throw error;
    }
});

const initialState = {
    featured_doctor_data: [],
    status: 'success'
};

export const FeaturedDoctorSlice = createSlice({
    name: 'FeaturedDoctor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetFeaturedDoctor.pending, (state) => {
                state.status = "loading......";
                state.featured_doctor_data = null;
            })
            .addCase(GetFeaturedDoctor.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.featured_doctor_data = payload;
            })
            .addCase(GetFeaturedDoctor.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
