import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetAllChildCare = createAsyncThunk("childcare", async () => {
    try {
        const res = await axiosInstance.get('childcare');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all child care:", error);
        throw error;
    }
});



const initialState = {
    all_child_care_data: [],
    status: 'success'
};

export const AllChildCareSlice = createSlice({
    name: 'AllChildCare',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllChildCare.pending, (state) => {
                state.status = "loading......";
                state.all_child_care_data = null;
            })
            .addCase(GetAllChildCare.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_child_care_data = payload;
            })
            .addCase(GetAllChildCare.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
