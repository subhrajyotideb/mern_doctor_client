import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetAllDep } from '../../Redux/AllDepOnlySlice';
import { imageUrl } from '../../Api/imageUrl';



const AllDepartment = () => {


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
            <div class="col-lg-6">
              <div class="section-title text-center">
                <h2 class="mb-4">Services</h2>
                <div class="divider mx-auto my-4"></div>
                <p>
                  Today’s users expect effortless experiences. Don’t let
                  essential people and processes stay stuck in the past. Speed
                  it up, skip the hassles
                </p>
              </div>
            </div>
          </div>


		<div class="row">

		{all_dep_data?.data?.map((item, index) => {
              return (
                <>

			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="service-block mb-5">
					<img src={`${imageUrl}${item?.image}`} alt="" class="img-fluid" style={{ height: '200px', objectFit: 'cover' }}/>
					<div class="content">
						<h4 class="mt-4 mb-2 title-color">{item?.departmentName}</h4>
						<p class="mb-4">{item?.description.slice(0, 100)}</p>
					</div>
				</div>
			</div>

			</>
              );
            })}
			
		</div>
	</div>
</section>
<section class="section cta-page">
	<div class="container">
		<div class="row">
			<div class="col-lg-7">
				<div class="cta-content">
					<div class="divider mb-4"></div>
					<h2 class="mb-5 text-lg">We are pleased to offer you the <span class="title-color">chance to have the healthy</span></h2>
					<Link to="/appoinmentform" class="btn btn-main-2 btn-round-full">Get appoinment<i class="icofont-simple-right  ml-2"></i></Link>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default AllDepartment
