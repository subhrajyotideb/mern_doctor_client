import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";



export const GetRecentBlogs = createAsyncThunk("RecentBlog", async () => {
    try {
        const res = await axiosInstance.get('recentblog');
        return res?.data;
    } catch (error) {
        console.error("Error fetching all blog:", error);
        throw error;
    }
});



const initialState = {
    recent_blog: [],
    status: 'success'
};

export const RecentBlogSlice = createSlice({
    name: 'RecentBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetRecentBlogs.pending, (state) => {
                state.status = "loading......";
                state.recent_blog = null;
            })
            .addCase(GetRecentBlogs.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.recent_blog = payload;
            })
            .addCase(GetRecentBlogs.rejected, (state) => {
                state.status = "rejected";
            });
    }
});
