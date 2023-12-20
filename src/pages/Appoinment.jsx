import React, { useEffect, useState } from 'react'
import { GetDoctorDetails } from '../Redux/DoctorSingleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { PostAppointment } from '../Redux/CreateAppSlice';

const Appoinment = () => {

  	// Function to format time to AM/PM format
const formatTime = (timeString) => {
	const time = new Date(`2000-01-01T${timeString}`);
	return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const { doctor_details } = useSelector((state) => state?.DoctorDetails);

  const user_name = localStorage.getItem("name")


  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const user_id = localStorage.getItem("id")
  const department_id = doctor_details?.data?.department_id?._id
  const doctor_id = doctor_details?.data?._id

  // console.log('Department==>',department_id);
  // console.log('Doctor==>',doctor_id);
  // console.log('User==>',user_id);

	const id = useParams();
	const dispatch = useDispatch();


	useEffect(() => {
	  dispatch(GetDoctorDetails(id));
	}, [id]);

  const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(PostAppointment({ user_id, department_id, doctor_id, phone, message }));
	  };


  return (
    <>
  <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Book your Seat</span>
          <h1 class="text-capitalize mb-5 text-lg">Appoinment</h1>

          
        </div>
      </div>
    </div>
  </div>
  </section>

<section class="appoinment section">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
          <div class="mt-3">
            <div class="feature-icon mb-3">
              <i class="icofont-support text-lg"></i>
            </div>
             <span class="h3">Call for an Emergency Service!</span>
              <h2 class="text-color mt-3">+70 016 00 532 </h2>
          </div>
      </div>

      <div class="col-lg-8">
           <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
            <h2 class="mb-2 title-color">Book an appoinment</h2>
            <p class="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
               
               
               
               <form id="#" class="appoinment-form" onSubmit={(e) => handleSubmit(e)}>
                    <div class="row">
                         <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option >{doctor_details.data?.department_id?.departmentName}</option>
                                  
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                  <option>{doctor_details.data?.name}</option>
                                  
                                </select>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                            <input readonly type="text" value={moment(doctor_details.data?.date).format('L')} class="form-control" placeholder="dd/mm/yyyy"/>
                        </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <input readonly type="text" value={`${formatTime(doctor_details.data?.aperture_time)} - ${formatTime(doctor_details.data?.departure_time)}`} class="form-control" placeholder="Appointment Time"/>
                            </div>
                        </div>

                         <div class="col-lg-6">
                            <div class="form-group">
                                <input readonly type="text" value={user_name} class="form-control" placeholder="Full Name"/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <input name="phone" id="phone" type="Number" onChange={(e) => setPhone(e.target.value)} class="form-control" placeholder="Phone Number" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group-2 mb-4">
                        <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value)} class="form-control" rows="6" placeholder="Your Message" required></textarea>
                    </div>

                    <button class="btn btn-main btn-round-full" >Make Appointment<i class="icofont-simple-right ml-2"></i></button>

                </form>
            </div>
        </div>
      </div>
    </div>
  
</section>
    </>
  )
}

export default Appoinment
