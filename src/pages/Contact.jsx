import React from 'react'
import ContactUs from '../components/core/ContactUs'
// import MyMap from '../components/Google-Map';




const Contact = () => {

  // const googleMapLink =
  //   'https://www.google.com/maps/place/Webskitters+Technology+Solutions+Pvt.+Ltd./@22.5752084,88.4248596,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275927b0061ad:0x496c2fab98874c86!8m2!3d22.5752084!4d88.4274345!16s%2Fg%2F12mj7h6sj?entry=ttu';


  return (
    <div>
      
      <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Contact Us</span>
          <h1 class="text-capitalize mb-5 text-lg">Get in Touch</h1>

         
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section contact-info pb-0">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-live-support"></i>
          <h5>Call Us</h5>
          +700-160-0532
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-support-faq"></i>
          <h5>Email Us</h5>
          contact@mail.com
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-location-pin"></i>
          <h5>Location</h5>
          Sector V,Kolkata
        </div>
      </div>
    </div>
  </div>
</section>

<ContactUs/>


{/* <MyMap googleMapLink={googleMapLink} /> */}
    </div>
  )
}

export default Contact

