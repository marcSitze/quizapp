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
            Positionnez-Vous Au Bon Endroit Pour Bien Accomplir Votre Travail.
            Pour cultiver l’excellence et transformer votre environnement par la
            performance, vous avez besoin de l’attitude mentale pour y arriver.
            Recevez une clarté instantanée grâce au RigorScore™ Assessment, pour
            savoir si vous êtes une personne légère dans votre travail,
            rigoureuse ou perfectionniste. Comment Ça Marche ? Vous choisirez la
            phrase qui vous décrit le mieux à travers les trois catégories :
            légèreté, rigueur et perfectionnisme. Il y a environ 28 questions en
            tout. Lorsque vous aurez terminé, vous recevrez votre unique
            RigorScore™ sur la base de la catégorie qui a obtenu le plus de
            point. Alors vous aurez la clarté pour mieux vous situer et prendre
            les choix appropriés pour améliorer votre rigueur, ou simplement la
            renforcer. L’évaluation vous prendra entre 5 à 10 minutes. En y
            répondant objectivement, cela vous apportera plus de valeur
          </p>

          <button onClick={handleTakeQuizClick}>TAKE THE QUIZ</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandingHeader);
