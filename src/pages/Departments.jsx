import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllDep } from '../Redux/AllDepOnlySlice';
import { Link } from 'react-router-dom';
import { imageUrl } from '../Api/imageUrl';

const Departments = () => {

	const dispatch = useDispatch();

	const { all_dep_data } = useSelector((state) => state?.AllDep);
	// console.log(all_dep_data);


	useEffect(() => {
		dispatch(GetAllDep());
		
	  }, [dispatch]);

  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">All Department</span>
          <h1 class="text-capitalize mb-5 text-lg">Care Department</h1>


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
					<h2>Award winning patient care</h2>
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
						<Link to={`/all-doctors/${item?._id}`} class="read-more">Learn More  <i class="icofont-simple-right ml-2"></i></Link>
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

export default Departments
