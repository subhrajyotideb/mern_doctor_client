import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetAllDocDep = createAsyncThunk("alldoctordepartment", async () => {
    try {
        const res = await axiosInstance.get('alldoctordepartment');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all Doc Dep:", error);
        throw error;
    }
});



const initialState = {
    all_doc_dep_data: [],
    status: 'success'
};

export const AllDocDepSlice = createSlice({
    name: 'AllDocDep',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllDocDep.pending, (state) => {
                state.status = "loading......";
                state.all_doc_dep_data = null;
            })
            .addCase(GetAllDocDep.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_doc_dep_data = payload;
            })
            .addCase(GetAllDocDep.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
