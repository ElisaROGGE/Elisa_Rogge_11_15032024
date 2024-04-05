import React from "react";
import Banner from "../../components/Banner/Banner";
import backgroundImage from "../../assets/about.png";
import "./About.scss";
import Dropdown from "../../components/Dropdown/Dropdown";

const About: React.FC = () => {
  return (
    <div className="about">
      <Banner backgroundImage={backgroundImage} />
      <Dropdown title="Fiabilité">
        <span>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </span>
      </Dropdown>
      <Dropdown title="Respect">
        <span>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </span>
      </Dropdown>
      <Dropdown title="Service">
        <span>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </span>
      </Dropdown>
      <Dropdown title="Sécurité">
        <span>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </span>
      </Dropdown>
    </div>
  );
};

export default About;
