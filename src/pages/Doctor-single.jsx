import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { GetDoctorDetails } from '../Redux/DoctorSingleSlice';
import { imageUrl } from '../Api/imageUrl';

const Doctorsingle = () => {


	// Function to format time to AM/PM format
const formatTime = (timeString) => {
	const time = new Date(`2000-01-01T${timeString}`);
	return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


	const { doctor_details } = useSelector((state) => state?.DoctorDetails);

	const id = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
	  dispatch(GetDoctorDetails(id));
	}, [id]);

  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Doctor Details</span>
          <h1 class="text-capitalize mb-5 text-lg">{doctor_details.data?.name}</h1>
		  <p><strong>Department - </strong>{doctor_details.data?.department_id?.departmentName}</p>

          
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section doctor-single">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="doctor-img-block">
          <img
            src={`${imageUrl}${doctor_details.data?.image}`}
            alt="Doctor Image"
            class="img-fluid w-100"
            style={{ width: '180px', height: '400px' }} // Adjust the width and height according to your preference
          />

          <div class="info-block mt-4">
            <h4 class="mb-0">{doctor_details.data?.name}</h4>
            <p>
              <strong>Department- </strong>
              {doctor_details.data?.department_id?.departmentName}
            </p>

            <ul class="list-inline mt-4 doctor-social-links">
              <li class="list-inline-item">
                <a href="#!">
                  <i class="icofont-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <i class="icofont-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <i class="icofont-skype"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <i class="icofont-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <i class="icofont-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-8 col-md-6">
        <div class="doctor-details mt-4 mt-lg-0">
          <h2 class="text-md">Introducing to myself</h2>
          <div class="divider my-4"></div>

          <p>{doctor_details.data?.description}</p>

          <Link to={`/appoinment/${doctor_details.data?._id}`} class="btn btn-main-2 btn-round-full mt-3">
            Make an Appoinment
            <i class="icofont-simple-right ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>





<section class="section doctor-skills">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<h3>My skills</h3>
				<div class="divider my-4"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur
					voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum
					ipsam dolorum iste laudantium tenetur.</p>
			</div>
			<div class="col-lg-4">
				<div class="skill-list">
					<h5 class="mb-4">Expertise area</h5>
					<ul class="list-unstyled department-service">
						<li><i class="icofont-check mr-2"></i>International Drug Database</li>
						<li><i class="icofont-check mr-2"></i>Stretchers and Stretcher Accessories</li>
						<li><i class="icofont-check mr-2"></i>Cushions and Mattresses</li>
						<li><i class="icofont-check mr-2"></i>Cholesterol and lipid tests</li>
						<li><i class="icofont-check mr-2"></i>Critical Care Medicine Specialists</li>
						<li><i class="icofont-check mr-2"></i>Emergency Assistance</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="sidebar-widget  gray-bg p-4">
					<h5 class="mb-4">Make Appoinment</h5>

					<ul class="list-unstyled lh-35">
						<li class="d-flex justify-content-between align-items-center">
							<span>Monday - Friday</span>
							<span>{formatTime(doctor_details.data?.aperture_time)} - {formatTime(doctor_details.data?.departure_time)}</span>
						</li>
						
						<li class="d-flex justify-content-between align-items-center">
							<span>Sunday</span>
							<span>Closed</span>
						</li>
					</ul>

					<div class="sidebar-contatct-info mt-4">
						<p class="mb-0">Need Urgent Help?</p>
						<h3 class="text-color-2">+23-4565-65768</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Doctorsingle
