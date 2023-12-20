import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllDep } from '../../Redux/AllDepOnlySlice';
import { imageUrl } from '../../Api/imageUrl';

const AppointmentProcess = () => {

	const dispatch = useDispatch();

	const { all_dep_data } = useSelector((state) => state?.AllDep);
	// console.log(all_dep_data);


	useEffect(() => {
		dispatch(GetAllDep());
		
	  }, [dispatch]);

  return (
    <div>
      


<section class="section service-2">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<h2>Select your service</h2>
					<div class="divider mx-auto my-4"></div>
					<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
			</div>
		</div>

		

		<div class="row">


		{all_dep_data?.data?.map((item, index) => {
              return (
                <>

			<div class="col-lg-4 col-md-6 ">
				<div class="department-block mb-5">
					<img src={`${imageUrl}${item?.image}`} alt="" class="img-fluid w-100" style={{ height: '200px', objectFit: 'cover' }}/>
					<div class="content">
						<h4 class="mt-4 mb-2 title-color">{item?.departmentName}</h4>
						<p class="mb-4">{item?.description.slice(0, 100)}</p>
						<Link to={`/all-doctors/${item?._id}`} class="btn btn-main btn-round-full">Make Appointment  <i class="icofont-simple-right ml-2"></i></Link>
					</div>
				</div>
			</div>

			
			</>
              );
            })}
			
		</div>


	</div>
</section>
    </div>
  )
}

export default AppointmentProcess
