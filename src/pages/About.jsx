import ChildCare from "../components/core/ChildCare"
import FeaturedDoctors from "../components/core/FeaturedDoctors"
import PersonalCare from "../components/core/PersonalCare"





const About = () => {
  return (
    <div>
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">About Us</span>
          <h1 class="text-capitalize mb-5 text-lg">About Us</h1>

          
        </div>
      </div>
    </div>
  </div>
</section>

<PersonalCare/>

<ChildCare/>

{/* <section class="section awards">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-4">
				<h2 class="title-color">Our Doctors achievements </h2>
				<div class="divider mt-4 mb-5 mb-lg-0"></div>
			</div>
			<div class="col-lg-8">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/3.png" alt="" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/4.png" alt="" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/1.png" alt="" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/2.png" alt="" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/5.png" alt="" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6">
						<div class="award-img">
							<img src="images/about/6.png" alt="" class="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}

<FeaturedDoctors/>


    </div>
  )
}

export default About
