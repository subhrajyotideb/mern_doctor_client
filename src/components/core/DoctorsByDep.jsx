import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GetAllDoctorsbyDEP } from '../../Redux/AllDocbyDep';
import { imageUrl } from '../../Api/imageUrl';

const DoctorsByDep = () => {
  const { dep_doctors_details } = useSelector((state) => state.AllDoctors);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllDoctorsbyDEP(id));
  }, [dispatch, id]);

  const data = dep_doctors_details?.data || [];
  // console.log('Data ====>', data);

  // Get the first departmentName
  const firstDepartmentName = data.length > 0 ? data[0].department_id.departmentName : '';

  
  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">All Doctors of</span>
          <h1 class="text-capitalize mb-5 text-lg">{firstDepartmentName} Department</h1>


        </div>
      </div>
    </div>
  </div>
</section>


<section class="section service-2">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<h2>Best Doctors</h2>
					<div class="divider mx-auto my-4"></div>
					<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
			</div>
		</div>

		

		<section class="section service-2">
  <div class="container">
    <div class="row">
      {data?.map((item, index) => (
        <div key={index} class="col-md-4">
          <div class="card mb-3 shadow-sm border-0" style={{ maxWidth: '300px' }}>
            <img src={`${imageUrl}${item?.image}`} alt="" class="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
            <div class="card-body">
              <h5 class="card-title">{item?.name}</h5>
              <p class="card-text">{item?.description.slice(0, 100)}</p>
              <Link to={`/doctor-single/${item?._id}`} class="btn btn-main btn-round-full">Make Appointment</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



	</div>
</section>
    </div>
  );
};

export default DoctorsByDep;
