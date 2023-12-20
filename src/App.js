import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import About from './pages/About';
import Appoinment from './pages/Appoinment';
import Blog from './pages/Blog';
import Blogsingle from './pages/Blog-single';
import Contact from './pages/Contact';
import Departmentsingle from './pages/Department-single';
import Departments from './pages/Departments';
import Doctorsingle from './pages/Doctor-single';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Services from './pages/Services';
import Registration from './pages/Registration';
import Login from './pages/Login';
import DoctorsByDep from './components/core/DoctorsByDep';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { check_token } from './Redux/LoginSlice';
import AppointmentProcess from './components/core/AppointmentForm';
import UserDashboard from './pages/UserDashboard';



function App() {


  //check token avable or not
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
    if (token !== null && token !== undefined) {
      return <>{children}</>;
    } else {
  
      // toast.error("Please log in to access this page", {
      //   position: toast.POSITION.TOP_CENTER,
      // });

      return  <Navigate to="/login" />;
      
    }
  }


  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(check_token());
    document.title = 'Doctor';
   },[dispatch])
  

  //for Public Route
  const PublicRouteNames = [

    {
      path: "/login",
      Component : <Login/>
    },
    {
      path: "/register",
      Component: <Registration/>
    },
    {
      path: "/",
      Component : <Home/>
    },
    {
      path: "/about",
      Component : <About/>
    },
    {
      path: "/services",
      Component : <Services/>
    },
    {
      path: "/departments",
      Component : <Departments/>
    },
    {
      path: "/department-single",
      Component : <Departmentsingle/>
    },
    {
      path: "/doctor",
      Component : <Doctors/>
    },
    {
      path: "/doctor-single/:id",
      Component : <Doctorsingle/>
    },
    {
      path: "/all-doctors/:id",
      Component : <DoctorsByDep/>
    },
    
    {
      path: "/blog",
      Component : <Blog/>
    },
    {
      path: "/blog-single/:id",
      Component : <Blogsingle/>
    },
    {
      path: "/contact",
      Component : <Contact/>
    },

  ]


  //for Private Route
  const PrivateRouteNames = [
  
    {
      path: '/appoinmentform',
      Component: <AppointmentProcess/>
    },
    {
      path: "/appoinment/:id",
      Component : <Appoinment/>
    },
    {
      path: "/dashboard",
      Component : <UserDashboard/>
    },
    
    
  ]



  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route> */}
        {/* <Route path='/services' element={<Services/>}></Route>
        <Route path='/departments' element={<Departments/>}></Route> */}
        {/* <Route path='/department-single' element={<Departmentsingle/>}></Route>
        <Route path='/doctor' element={<Doctors/>}></Route> */}
        {/* <Route path='/doctor-single/:id' element={<Doctorsingle/>}></Route>
        <Route path='/all-doctors/:id' element={<DoctorsByDep/>}></Route> */}
        {/* <Route path='/appoinment/:id' element={<Appoinment/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog-single/:id' element={<Blogsingle/>}></Route> */}
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
        {/* <Route path='/register' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route> */}
        {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  Key={index + 1}
                  exact
                  path={route.path}
                  element={route?.Component}
                />
              )
            })}

            {/* Protect Route */}
            {PrivateRouteNames?.map((route,index) => {
              return (
                <Route
                  key={index+1}
                  path={route.path}
                  element={<PrivateRoute>{route?.Component}</PrivateRoute>}
                />
              )

            })}
      </Routes>
      <Footer/>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
