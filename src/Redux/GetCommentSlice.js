import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/apiUrl";

const initialState = {
    status: "idle",
    comment_details: [],
};

export const GetBlogCommentDetails = createAsyncThunk("getblogcomment", async (id) => {
    try {
        const res = await axiosInstance.get(`getblogcomment/${id.id}`);
        return res?.data;
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to be caught by the rejected action
    }
});

export const CommentDetailsSlice = createSlice({
    name: "CommentDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetBlogCommentDetails.pending, (state) => {
                state.status = "loading......";
                state.comment_details = {};
            })
            .addCase(GetBlogCommentDetails.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.comment_details = payload;
            })
            .addCase(GetBlogCommentDetails.rejected, (state) => {
                state.status = "Rejected";
            });
    },
});


