import React from 'react';
import featuresImage from '../../images/features.svg';
import calendarIcon from '../../images/calendar-lines-pen.png';
import usersIcon from '../../images/users-medical.png';
import trackIcon from '../../images/track.png';
import assessmentIcon from '../../images/assessment.png';

const Features = () => {
  return (
    <section id="features" className="py-5 py-md-0 my-md-0 my-5 my-lg-2 py-lg-2">
      <div className="container-fluid p-0">
        <div className="d-lg-flex d-flex flex-column flex-lg-row justify-content-center align-items-center vh-100">
          <div className="features-img col-lg-6 col-8 d-none text-center d-lg-flex">
            <img src={featuresImage} alt="" className="img-fluid rounded-end-pill" />
          </div>
          <div className="features-content col-lg-5 m-auto">
            <h2 className="display-4 fw-bold mb-4 text-center text-lg-start">
              Path to Wellness
            </h2>
            <p className="lead mb-4 mb-md-1 text-center text-lg-start col-lg-auto col-10 mx-auto">
              Explore <span className="fw-normal">Path to Wellness</span> with our
              comprehensive suite of features, meticulously designed to
              accompany you on your journey towards mental well-being. From
              scheduling appointments to engaging with a supportive community,
              tracking your progress, and conducting mental health assessments,
              we offer the essential tools to guide you towards optimal
              wellness.
            </p>
            <div className="features-items row g-5 text-center justify-content-center justify-content-lg-start mt-0 mt-lg-0 pb-5 pb-lg-0">
              <div className="col-lg-5 col-5 d-flex flex-column justify-content-center align-items-center">
                <img src={calendarIcon} alt="" width="60" className="mb-3" />
                Appointment Scheduling
              </div>
              <div className="col-lg-5 col-5 d-flex flex-column justify-content-center align-items-center">
                <img src={usersIcon} alt="" width="60" className="mb-3" />
                Community Engagement
              </div>
              <div className="col-lg-5 col-5 d-flex flex-column justify-content-center align-items-center ms-lg-auto">
                <img src={trackIcon} alt="" width="60" className="mb-3" />
                Progress Tracking
              </div>
              <div className="col-lg-5 col-5 d-flex flex-column justify-content-center align-items-center ms-lg-auto">
                <img src={assessmentIcon} alt="" width="60" className="mb-3" />
                Mental Health Assessments
              </div>
            </div>
            <div className="features-button my-5 my-md-4 text-center text-lg-start mt-lg-5">
              <a href="features.html" className="custom-button rounded-5 fw-medium text-decoration-none order-lg-1">
                Discover What We Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;