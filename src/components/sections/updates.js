import React, {useState} from 'react';
import offerImage from '../../assets/images/september_offer.jpeg';

const UpdatesSection = () => {
    return (
      
    <section id="updates" className="updates-section bg-light">
    <div className="container">
      <div className="row align-items-center mb-4 mb-lg-4">
        <div className="col-xl-6 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0" src={offerImage} alt="" />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <p className="text-black-80 mb-0">
             This month we have something for both new and existing members. Get in touch to enjoy this amazing offer.
             Keep an eye out for our regular promotions on our social media pages. 
            </p>
          </div>
        </div>
      </div>
      </div>
      </section>
    );
  }

export default UpdatesSection;