import React, { useEffect } from 'react';

//import aos foe scroll effects
import AOS from 'aos';
import 'aos/dist/aos.css';

import Photo1 from '../../../assets/images/hair-photo-1-2-x.jpg';
import Photo1New from '../../../assets/images/biographie.png';
import Photo2 from '../../../assets/images/sex-photo-1-2-x.jpg';
import Photo2New from '../../../assets/images/about2.jpeg';
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
            Tankou Gildas est un entrepreneur qui vit pour chercher Dieu, se
            soumettre à Lui, afin de contribuer à l’extension de Son Royaume sur
            la terre. Grâce à tout ce qu’il entreprend, il souhaite que les gens
            voient la beauté de Dieu, Son amour, Sa grâce, Sa miséricorde, et la
            paix qu’Il offre. Il est le gérant de STANDARDS, entreprise qui
            existe pour créer une valeur supérieure durable dans l’industrie de
            la gestion du risque, afin d’inspirer ses clients, ses partenaires
            et les communautés dans lesquelles ils opèrent à bâtir une culture
            sécurité au sein de leurs activités, de sorte qu’ils produisent avec
            plus de sérénité. Il est également le fondateur de Rigorwell & Co.,
            et a en projet avec sa femme la création d’une association qui
            encourage les familles à prendre soin de leurs enfants atteints de
            trisomie 21 ou d’autisme, afin qu’ils accomplissent leur destinée
            sur la terre, et ne voient pas leur vie comme une fatalité. Dieu l’a
            béni avec une merveilleuse femme qui prend Dieu au sérieux dans sa
            vie, avec trois enfants qu’ils ont la charge de bâtir pour les
            préparer à une vie d’adulte au service du Royaume de Dieu, de leur
            pays le Cameroun, de leur famille, et partout où Dieu les placera.
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
            générosité et la satisfaction. Nous aimons tous admirer et profiter
            de ce qui est beau, efficace et bien fait. Nous nous comportons
            comme des clients exigeants, qui attendent des autres la perfection.
            Mais sommes-nous aussi exigeants avec nous-mêmes ? Sommes-nous
            rigoureux dans ce que nous accomplissons, ou nous contentons-nous de
            la superficialité et de la médiocrité ? Notre travail reflète qui
            nous sommes. Il parle de nous avant même que nous ne nous
            présentions. Il suscite l’intérêt ou le désintérêt, le respect ou le
            mépris, l’admiration ou la déception. Quelle impression voulez-vous
            laisser aux autres ? Quelle réputation voulez-vous construire ? Ce
            livre vous propose de faire le choix de la rigueur, qui n’est pas
            une contrainte, mais une liberté. La rigueur, c’est l’amour du
            travail bien fait, c’est le souci du détail, c’est la recherche de
            la qualité. La rigueur, c’est la générosité envers ceux qui
            bénéficient de notre travail, c’est le service rendu à la
            communauté, c’est la contribution au bien commun. La rigueur, c’est
            la source du bonheur et de l’accomplissement personnel. Osez la
            Rigueur, c’est oser changer votre vie et celle des autres. C’est
            oser devenir un artiste de l’excellence. C’est oser créer votre
            chef-d’œuvre.
          </p>
        </div>

        <div className="second__img-parent">
          <img src={Photo2New} alt="photo2" />
        </div>
      </div>
    </>
  );
};

export default Panel;
