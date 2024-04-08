import React, { useEffect } from 'react';

//import aos foe scroll effects
import AOS from 'aos';
import 'aos/dist/aos.css';

import Photo1 from '../../../assets/images/hair-photo-1-2-x.jpg';
import Photo1New from '../../../assets/images/biographie.png';
import Photo2 from '../../../assets/images/sex-photo-1-2-x.jpg';
import './style.scss';

const Panel = ({ reverse, children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up-right" className="panel__parent">
        <div className="panel__img-parent">
          <img src={Photo1New} alt="photo1" />
        </div>
        <div className="panel__content-parent">
          <h2>01</h2>
          {/* <h6>HAIR LOSS</h6> */}
          <h5>BIOGRAPHIE DE L’AUTEUR.</h5>
          <p>
            Dieu l’a béni avec une merveilleuse femme qui prend Dieu au sérieux
            dans sa vie, avec trois enfants qu’ils ont la charge de bâtir pour
            les préparer à une vie d’adulte au service du Royaume de Dieu, de
            leur pays le Cameroun, de leur famille, et partout où Dieu les
            placera.
          </p>
        </div>
      </div>

      <div data-aos="fade-down-right" className="second__parent">
        <div className="second__content-parent">
          <h2>02</h2>
          {/* <h6>Erectile Dysfunction</h6> */}
          <h5>APERCU DE L’OUVRAGE « OSEZ LA RIGUEUR »</h5>
          <p>
            Osez la Rigueur est plus qu’un livre. C’est une invitation à
            transformer tout ce que vous accomplissez en un chef-d’œuvre au
            service des autres. Avec sincérité, authenticité et humilité,
            l’auteur vous guide dans un voyage passionnant vers l’excellence, la
            générosité et la satisfaction.
          </p>
        </div>

        <div className="second__img-parent">
          <img src={Photo2} alt="photo2" />
        </div>
      </div>
    </>
  );
};

export default Panel;
