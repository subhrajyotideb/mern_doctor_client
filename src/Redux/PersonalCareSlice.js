import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetAllPersonalCare = createAsyncThunk("personalcare", async () => {
    try {
        const res = await axiosInstance.get('personalcare');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all personal care:", error);
        throw error;
    }
});




const initialState = {
    all_personal_care_data: [],
    status: 'success'
};

export const AllPersonalCareSlice = createSlice({
    name: 'AllPersonalCare',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllPersonalCare.pending, (state) => {
                state.status = "loading......";
                state.all_personal_care_data = null;
            })
            .addCase(GetAllPersonalCare.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_personal_care_data = payload;
            })
            .addCase(GetAllPersonalCare.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
