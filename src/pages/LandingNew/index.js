import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import AssessmentImage from '../images/assessment-image.png';
import QuizImage from '../../assets/images/quizz.png';

const LandingNew = () => {
  return (
    <div>
      <div className="container">
        <div className="overlay">
          <div className="content">
            <h1 className="title">
              Positionnez-Vous Au Bon Endroit Pour Bien Accomplir Votre Travail.
            </h1>
            <p className="description">
              Pour cultiver l’excellence et transformer votre environnement par
              la performance, vous avez besoin de l’attitude mentale pour y
              arriver. Recevez une clarté instantanée grâce au RigorScore™
              Assessment, pour savoir si vous êtes une personne légère dans
              votre travail, rigoureuse ou perfectionniste.
            </p>
            <Link to="/quiz">
              <button className="cta-button">Commencer</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="how-it-works">
        <div className="how-it-works-content">
          <img
            src={QuizImage}
            alt="LifeScore Assessment"
            className="assessment-image"
          />
          <div className="how-it-works-text">
            <h2>Comment Ça Marche ?</h2>
            <p>
              Vous choisirez la phrase qui vous décrit le mieux à travers les
              trois catégories : légèreté, rigueur et perfectionnisme.
            </p>
            <p>
              Il y a environ 29 questions en tout. Lorsque vous aurez terminé,
              vous recevrez votre unique RigorScore™ sur la base de la catégorie
              qui a obtenu le plus de point. Alors vous aurez la clarté pour
              mieux vous situer et prendre les choix appropriés pour améliorer
              votre rigueur, ou simplement la renforcer.
            </p>
            <p>
              L’évaluation vous prendra entre 5 à 10 minutes. En y répondant
              objectivement, cela vous apportera plus de valeur
            </p>
            <Link to="/quiz">
              <button className="start-quiz-button">
                Commencer l'évaluation
              </button>
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
            ©{new Date().getFullYear()} RigorScore ™
            {/* <a href="#">Terms</a> | <a href="#">Privacy</a> */}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingNew;
