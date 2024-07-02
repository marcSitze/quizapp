import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import AssessmentImage from '../images/assessment-image.png';

const LandingNew = () => {
  return (
    <div>
      <div className="container">
        <div className="overlay">
          <div className="content">
            <h1 className="title">Set Goals Where You Need Them Most</h1>
            <p className="description">
              To design a picture-perfect year, you need goals in different
              areas of life. Receive instant clarity on what areas of your life
              need improvement with the Full Focus LifeScore™ Assessment.
            </p>
            <Link to="/quiz">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div className="how-it-works-content">
          <img
            src={AssessmentImage}
            alt="LifeScore Assessment"
            className="assessment-image"
          />
          <div className="how-it-works-text">
            <h2>How It Works</h2>
            <p>
              You'll choose phrases that best describe you across nine different
              life domains: body, mind, spirit, love, family, community, money,
              work, and hobbies. There are up to 45 questions total.
            </p>
            <p>
              When you're finished, you'll be given a unique LifeScore on a
              scale from 1-100. Then you'll have the clarity you need to set
              better goals and have your best year ever.
            </p>
            <p>The assessment will take 5-10 minutes.</p>
            <Link to="/quiz">
              <button className="cta-button">Start Assessment</button>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> |{' '}
          <a href="#">LinkedIn</a>
        </div>
        <div className="footer-bottom">
          <p>
            ©2024 Full Focus | <a href="#">Permissions</a> |{' '}
            <a href="#">Terms</a> | <a href="#">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingNew;
