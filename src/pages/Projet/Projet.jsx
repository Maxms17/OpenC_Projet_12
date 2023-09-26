import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Dropdown from '../../components/Dropdown/Dropdown';

import Data from '../../data.json';

import { useParams } from 'react-router-dom';
import { navigate } from '@reach/router';
import './Projet.css'

function Projet() {
  const { id } = useParams();

  const projet = Data.find((datas) => datas.id === id);

  if (!projet) {
    navigate("/*");
    window.location.reload();
    return null;
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
