import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetAllBlogs = createAsyncThunk("All_Blog", async () => {
    try {
        const res = await axiosInstance.get(`allblog`);
        return res?.data;
    } catch (error) {
        console.error("Error fetching all blog:", error);
        throw error;
    }
});



const initialState = {
    all_blog_data: [],
    status: 'success'
};

export const AllBlogSlice = createSlice({
    name: 'AllBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllBlogs.pending, (state) => {
                state.status = "loading......";
                state.all_blog_data = null;
            })
            .addCase(GetAllBlogs.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.all_blog_data = payload;
            })
            .addCase(GetAllBlogs.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
