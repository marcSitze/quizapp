import React from 'react';
import { withRouter } from 'react-router';

import './index.scss';

//import logo
import logo from '../../../assets/svg/logo.svg';
import logoNew from '../../../assets/images/logoNew.png';

const LandingHeader = ({ history }) => {
  const handleTakeQuizClick = () => {
    history.push('/quiz');
  };

  return (
    <div className="header__wrapper">
      <div className="header__center">
        <img src={logoNew} style={{ width: 150 }} alt="logo" />

        <div className="header__content">
          <h1>RIGORSCORE</h1>
          {/* <h1>TO YOURSELF</h1> */}

          <p>
            Osez la Rigueur est plus qu’un livre. C’est une invitation à
            transformer tout ce que vous accomplissez en un chef-d’œuvre au
            service des autres. Avec sincérité, authenticité et humilité,
            l’auteur vous guide dans un voyage passionnant vers l’excellence, la
            générosité et la satisfaction.
          </p>

          <button onClick={handleTakeQuizClick}>TAKE THE QUIZ</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingHeader);
