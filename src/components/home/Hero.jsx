import React from 'react'
import heroImage from '../../images/hero-image.svg';
function Hero() {
  return (
    <header id="hero">
      <div className="row flex flex-md-row-reverse flex-lg-row align-items-center justify-content-center g-5 col-11 m-auto">
        <div className="col-lg-6 hero-title">
          <h1 className="display-3 fw-bold lh-1">
            Nurturing Minds, Empowering Workplaces
          </h1>
          <p className="lead fw-normal mb-4 h5">
            At Mindful Work, we foster mental well-being and empower workplaces
            through resources, support, and connections.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="#" className="custom-button text-decoration-none rounded-5 text-center fw-medium">
              Schedule a Consultation
            </a>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={heroImage}
            className="mx-lg-auto img-fluid"
            alt="Hero"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;