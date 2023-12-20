import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetAllDep = createAsyncThunk("alldepartment", async () => {
    try {
        const res = await axiosInstance.get('alldepartment');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all departments:", error);
        throw error;
    }
});



const initialState = {
    all_dep_data: [],
    status: 'success'
};

export const AllDepOnlySlice = createSlice({
    name: 'AllDep',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllDep.pending, (state) => {
                state.status = "loading......";
                state.all_dep_data = null;
            })
            .addCase(GetAllDep.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_dep_data = payload;
            })
            .addCase(GetAllDep.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
