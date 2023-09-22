import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Dropdown from '../../components/Dropdown/Dropdown';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';
import { navigate } from '@reach/router';
import './Projet.css'

function Projet() {
  const { id } = useParams();

  // Recherche du logement correspondant dans les données en utilisant l'ID
  const projet = Data.find((datas) => datas.id === id);

  if (!projet) {
    // Rediriger vers la page d'erreur lorsque le logement n'est pas trouvé
    navigate("/*");
    window.location.reload();
    return null; // Vous pouvez également renvoyer un composant d'erreur ici directement.
  }

  return (
    <Layout>
      <div key={projet.id}>
        <Carrousel projet={projet} />
        <Info projet={projet} />
        <div className='drop'>
          <Dropdown title={'Description'} para={projet.description}/>
          <Dropdown title={'Compétence'} para={projet.competence}/>
        </div>
      </div>
    </Layout>
  );
}

export default Projet;
