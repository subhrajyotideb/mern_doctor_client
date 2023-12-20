import { configureStore } from "@reduxjs/toolkit";
import { FeaturedDoctorSlice } from "../FeaturedDocSlice";
import { DoctorDetailsSlice } from "../DoctorSingleSlice";
import { AllDepOnlySlice } from "../AllDepOnlySlice";
import { DepidDocSlice } from "../DepWiseDoctorSlice";
import { AllDocDepSlice } from "../AllDocAndDep";
import { AllPersonalCareSlice } from "../PersonalCareSlice";
import { AllChildCareSlice } from "../ChildCareSlice";
import { AllDoctorByDepSlice } from "../AllDocbyDep";
import { AllBlogSlice } from "../AllBlogSlice";
import { RegSlice } from "../RegSlice";
import { LogSlice } from "../LoginSlice";
import { contactSlice } from "../PostContactSlice";
import { SingleBlogSlice } from "../BlogSingleSlice";
import { CommentSlice } from "../PostCommentSlice";
import { CommentDetailsSlice } from "../GetCommentSlice";
import { AppointmentSlice } from "../CreateAppSlice";
import { UserDashSlice } from "../DashboardSlice";
import { SearchBlogSlice } from "../Search";
import { RecentBlogSlice } from "../Recent";





const Store=configureStore({
    reducer:{
         
        FeaturedDoctor:FeaturedDoctorSlice.reducer,
        DoctorDetails:DoctorDetailsSlice.reducer,
        AllBlog:AllBlogSlice.reducer,
        AllDep:AllDepOnlySlice.reducer,
        DepDocDetails:DepidDocSlice.reducer,
        AllDocDep:AllDocDepSlice.reducer,
        AllPersonalCare:AllPersonalCareSlice.reducer,
        AllChildCare:AllChildCareSlice.reducer,
        AllDoctors:AllDoctorByDepSlice.reducer,
        USER:RegSlice.reducer,
        userlogin:LogSlice.reducer,
        contact:contactSlice.reducer,
        SingleBlog:SingleBlogSlice.reducer,
        comment:CommentSlice.reducer,
        CommentDetails:CommentDetailsSlice.reducer,
        appointment:AppointmentSlice.reducer,
        UserDash:UserDashSlice.reducer,
        SearchBlog:SearchBlogSlice.reducer,
        RecentBlog:RecentBlogSlice.reducer,

    }
});

export default Store;