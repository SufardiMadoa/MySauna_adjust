import React from 'react';
import article1 from '../../images/article1.svg';
import article2 from '../../images/article2.svg';
import article3 from '../../images/article3.svg';
import person1 from '../../images/article/thumb/person1.svg';
import person2 from '../../images/article/thumb/person2.svg';
import person3 from '../../images/article/thumb/person3.svg';

const Articles = () => {
  return (
    <section id="article">
      <div className="container py-5 px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center article-heading">
              <h2 className="fw-bolder display-5">Featured Articles</h2>
              <p className="lead mb-5">
                Explore practical strategies to manage stress in the workplace
                and prioritize your mental health amidst professional demands.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src={article1} alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-gradient rounded-pill mb-2">
                  Mental Wellness
                </div>
                <a className="text-decoration-none link-dark stretched-link" href="#!">
                  <h5 className="card-title mb-3">
                    The Power of Mindfulness at Work
                  </h5>
                </a>
                <p className="card-text mb-0">
                  Learn how incorporating mindfulness practices into your daily
                  routine can reduce stress and enhance productivity.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src={person1} alt="..." />
                    <div className="small">
                      <div className="fw-bold">Sarah Thompson</div>
                      <div className="text-muted">
                        April 12, 2024 &middot; 6 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src={article2} alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-gradient rounded-pill mb-2">
                  Mental Wellness
                </div>
                <a className="text-decoration-none link-dark stretched-link" href="#!">
                  <h5 className="card-title mb-3">
                    Unlocking Creativity: Embracing Mental Health Breaks
                  </h5>
                </a>
                <p className="card-text mb-0">
                  Discover how taking breaks and nurturing your mental
                  well-being can foster creativity and innovation in the
                  workplace.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src={person2} alt="..." />
                    <div className="small">
                      <div className="fw-bold">James Smith</div>
                      <div className="text-muted">
                        March 5, 2024 &middot; 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img className="card-img-top" src={article3} alt="..." />
              <div className="card-body p-4">
                <div className="badge bg-gradient rounded-pill mb-2">
                  Workplace Productivity and Well-being
                </div>
                <a className="text-decoration-none link-dark stretched-link" href="#!">
                  <h5 className="card-title mb-3">
                    Building Resilience: Overcoming Adversity in the Workplace
                  </h5>
                </a>
                <p className="card-text mb-0">
                  Explore effective strategies to build resilience and bounce
                  back from setbacks in your professional life.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle me-3" src={person3} alt="..." />
                    <div className="small">
                      <div className="fw-bold">Emily Chen</div>
                      <div className="text-muted">
                        January 18, 2024 &middot; 10 min read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-button text-center">
          <a href="" className="fs-6">
            Visit publishing
            <span className="ms-2">
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;