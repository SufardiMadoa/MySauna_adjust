import React from 'react'

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container">
        <div className="row g-5 my-5">
          <div className="col-lg-5 reason-text">
            <div className="mb-4 footer-logo-wrap">
              <h5 href="#" className="footer-logo text-decoration-none fw-bolder fs-5">
                Why choose us?
              </h5>
            </div>
            <p className="lead mb-4 fs-6">
              At Mindful Work, we prioritize your mental well-being. Our
              platform offers comprehensive resources and support to help you
              navigate life's challenges with resilience and mindfulness.
            </p>

            <ul className="list-unstyled custom-social">
              <li>
                <a href="#"><span className="fa fa-brands fa-facebook-f"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-brands fa-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-brands fa-instagram"></span></a>
              </li>
              <li>
                <a href="#"><span className="fa fa-brands fa-linkedin"></span></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-7">
            <div className="row mx-auto">
              <div className="col-lg-5 contact-information mb-5 mb-lg-0">
                <h5 className="fw-bold fs-5">Contact Information</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <span className="me-2">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      Jl. Raya Janti No.143, Yogyakarta
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="me-2">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      +123-456-7890
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="me-2">
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      info@mindfulwork.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="me-2">
                        <i className="fa-regular fa-calendar-check"></i>
                      </span>
                      Monday to Sunday, 7:00 AM - 8:00 PM (UTC)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-auto col-md-3 nav-footer">
                <h5 className="fw-bold fs-5">Navigation</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Articles</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="col-auto col-md-4 resources">
                <h5 className="fw-bolder fs-5">Resources</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Appointment Scheduling</a></li>
                  <li><a href="#">Community Engagement</a></li>
                  <li><a href="#">Progress Tracking</a></li>
                  <li><a href="#">Mental Health Assessments</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary-subtle copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy;
                {new Date().getFullYear()}
                <span> Mindful Work</span>. All Rights Reserved
              </p>
            </div>

            <div className="terms-privacy col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;