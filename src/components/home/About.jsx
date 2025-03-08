import React from 'react';
import aboutImage from '../../images/about.svg';

const About = () => {
  return (
    <section id="about">
      <div className="container row mx-auto d-flex align-items-center py-3">
        <div className="col-lg-3 m-auto">
          <h2 className="display-4 fw-bold mb-4 order-lg-1">Our Story</h2>
          <div className="about-button">
            <a href="#" className="custom-button-2 rounded-5 fw-medium text-decoration-none order-lg-1">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-3 text-center order-lg-3 my-4 my-lg-0">
          <img src={aboutImage} alt="" className="img-fluid rounded-pill" />
        </div>
        <div className="col-lg-6 order-lg-2 text-md-center text-lg-start">
          <p className="fw-normal lead mb-4">
            At Mindful Work, we're dedicated to fostering mental well-being in
            every workplace. Learn about our journey, values, and commitment to
            supporting individuals on their path to better mental health.
          </p>
          <p>
            Get to know our mission and team dedicated to promoting mental
            wellness in every workplace
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;