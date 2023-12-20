import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    search_blog: [],
};


export const GetSearchBlog = createAsyncThunk("SearchBlog", async (search) => {
    try {
        const res = await axiosInstance.get(`/blogsearch/${search}`);
        // console.log('Search Data======>',res?.data);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});


export const SearchBlogSlice = createSlice({
    name: "SearchBlog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetSearchBlog.pending, (state) => {
                state.status = "loading......";
                state.search_blog = {};
            })
            .addCase(GetSearchBlog.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.search_blog = payload;
            })
            .addCase(GetSearchBlog.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


