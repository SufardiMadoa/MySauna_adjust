import React from 'react';

const Impact = () => {
  return (
    <section id="check" className="py-5">
      <div className="col-lg-10 mx-auto text-center">
        <div className="check-heading mx-auto text-center fw-normal col-lg-9 col-11 m-auto">
          <h2 className="display-4 fw-bold m-auto mb-4">OUR IMPACT</h2>
          <p className="text-lg-start lead mx-auto">
            At Mindful Work, we are committed to addressing mental health
            challenges in the workplace. Through our platform, we aim to provide
            support and resources to employees who may be experiencing mental
            health issues. Here's how we're making a difference:
          </p>
        </div>
        <div className="row fs-5 mx-auto text-center d-lg-flex justify-content-center w-75">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div>
              <p className="display-3 fw-bolder">170M+</p>
              <p className="text-lg-start text-center lead">
                Studies estimate 170 million individuals across sectors face
                mental health issues.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div>
              <p className="display-3 fw-bolder">88%</p>
              <p className="text-lg-start text-center lead">
                Mindful Work has an 88% success rate in helping users manage
                stress and enhance mental health.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0">
            <div>
              <p className="display-3 fw-bolder">100K+</p>
              <p className="text-lg-start text-center lead">
                We're committed to expanding our services for the community.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center check-button">
          <a href="#" className="custom-button-2 rounded-5 fw-medium text-decoration-none">
            Check Your Personality
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;