import React from 'react';
import textIcon from '../../images/text.png';

const Community = () => {
  return (
    <section id="community">
      <div className="col-10 mx-auto">
        <div className="community-heading text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Community Voices</h2>
          <p>Stories of Connection, Support, Empowerment</p>
        </div>
        <div className="row g-5 fst-italic">
          <div className="col-lg-4">
            <div className="d-flex align-items-start justify-content-start">
              <img src={textIcon} alt="" width="50" className="me-3" />
              <p>
                After incorporating Mindful Work into my routine, I've noticed a
                positive shift in my overall mood and resilience. It's become an
                essential part of my self-care regimen.
              </p>
            </div>
            <p className="text-end text-secondary">- Salmaa F</p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-start align-items-start">
              <img src={textIcon} alt="" width="50" className="me-3" />
              <p>
                "I was skeptical at first, but after trying Mindful Work, I can
                honestly say it's been instrumental in helping me cope with
                stress and anxiety.
              </p>
            </div>
            <p className="text-end text-secondary">- Ridhwan C</p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-start align-items-start">
              <img src={textIcon} alt="" width="50" className="me-3" />
              <p>
                As someone who struggles with mental health, finding a platform
                like Mindful Work has been a relief. It's like having a
                supportive community at my fingertips
              </p>
            </div>
            <p className="text-end text-secondary">- Masan B</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;