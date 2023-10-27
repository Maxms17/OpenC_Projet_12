import React from 'react';
import './Curriculum.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faCar } from '@fortawesome/free-solid-svg-icons';

import LogoBleu from '../../assets/logo-bleu.png'

import LogoLink from '../../assets/linkedin_icon.svg';
import LogoGit from '../../assets/github_icon.svg';
import LogoInsta from '../../assets/instagram_icon.svg';

function Curriculum() {
    return (
        <div className='curriculum'>
            <div className='titre'>
                <div className='titre-bleu-C'>
                    <h2>CURRICULUM VITAE</h2>
                </div>
                <div className='titre-noir-C'>
                    <h2>CURRICULUM VITAE</h2>
                </div>
            </div>
            <div className='container-text'>
                <div className='logo-bleu'>
                    <img src={LogoBleu} alt="Logo Bleu" className='image' />
                </div>
            </div>
            <div className='container-bleu'>
                <h1>Maxime DREUX</h1>
                <h3>Je suis intégrateur web, developpeur front-end</h3>
                <p>Je suis a la recherche d'un poste, bonne connaissace de React, Javascript et de la plupart des frameworks Web</p>
                <p>
                    Après deux années de licence informatique à l'Université du Mans, j'ai souhaité intégrer
                    une formation d'intégrateur web, sur openclassrooms. J'ai toujours aimé le monde
                    numérique.
                    Je sais travailler en équipe et mettre à profit les compétences de mes collaborateurs. Je
                    suis également passionné de moto. J'avale les kilomètres, mais je sais anticiper et assurer
                    mes arrières. J'aime le mouvement. Je ne m'ennuie jamais. J'aime relever les défis. Par
                    ailleurs, j'ai créé quelques sites web dans le cadre de mes études et formations.
                </p>
                <div className='contenaire-icone'>
                    <FontAwesomeIcon icon={faBirthdayCake} className="icone"/>
                    <p> Né le 17/01/2002 - 21ans </p>
                </div>
                <div className='contenaire-icone'>
                    <FontAwesomeIcon icon={faCar} className="icone"/>
                    <p> Détenteur d'un permis B et d'un véhicule </p>
                </div>
                <div className='lien-cv'>
                    <a className='a-link-cv' href="https://linkedin.com/in/maxime-dreux">
                        <div className='linkedin-cv'>
                            <img src={LogoLink} alt="Linkedin" className='image-cv' />
                            LINKEDIN
                        </div>
                    </a>
                    <a className='a-git-cv' href="https://github.com/Maxms17">
                        <div className='github-cv'>
                            <img src={LogoGit} alt="Github" className='image-cv' />
                            GITHUB
                        </div>
                    </a> 
                    <a className='a-insta-cv' href="https://www.instagram.com/maxime.d7">
                        <div className='instagram-cv'>
                            <img src={LogoInsta} alt="Instagram" className='image-cv' />
                            INSTAGRAM
                        </div>
                    </a>  
                </div>
                <h2>Langues</h2>
                <div>
                    <p>Français - Langue natale</p>
                    <p>Anglais - Compétences professionnelles limitées</p>
                </div>
                <h2>Formation</h2>
                <div>
                    <h3>Openclassrooms</h3>
                    <h4>INTÉGRATEUR WEB, LE MANS, FÉVRIER 2023 - NOVEMBRE 2023</h4>
                    <div className='liste'>
                        <div className='div-liste'>
                            <p>    - Réalisation de site internet avec HTML </p>
                            <p>    - Réalisation de site internet avec CSS </p>
                            <p>    - Réalisation de site internet avec JavaScript </p>
                            <p>    - Réalisation de site internet avec React </p>
                        </div>
                        <div className='div-liste'>
                            <p>    - Planification de développement d'un site </p>
                            <p>    - Optimisation des performances et du référencement </p>
                            <p>    - Débogage de site internet </p>
                            <p>    - Travailler en autonomie </p>
                        </div>
                    </div>
                </div>
                <h2>Expériences Professionnelles</h2>
                <div>
                    <h3>Agent SONO, Vendeur conseil et Agent d'escale</h3>
                    <h4>SNCF - LE MANS ET ANGERS, ÉTÉ 2022 - ÉTÉ 2021 - ÉTÉ 2020</h4>
                    <div className='liste'>
                        <div className='div-liste'>
                            <p>    - Assurer l'affichage des arrivés et départs en gare </p>
                            <p>    - Alerter les voyageurs en cas de perturbation </p>
                            <p>    - Respecter des procédures de sécurité </p>
                            <p>    - Réaliser des annonces par haut-parleur </p>
                            <p>    - Assurer la communication entre les services </p>
                            <p>    - Accueillir une clientèle </p>
                            <p>    - Étudier une demande client </p>
                            <p>    - Conseiller un client </p>
                            <p>    - Assurer le service après-vente </p>
                        </div>
                        <div className='div-liste'>
                            <p>    - Classer des documents professionnels </p>
                            <p>    - Accueillir les passagers et les informer sur les conditions de voyage </p>
                            <p>   - Vérifier les titres de transport </p>
                            <p>   - Renseigner les voyageurs </p>
                            <p>   - Aider les voyageurs pour les achats sur les bornes en libre service </p>
                            <p>   - Réaliser les opérations d'embarquement/débarquement, notamment avec le service 
                                    Junior&Cie </p>
                            <p>    - Veiller à la sécurité des voyageurs </p>
                            <p>    - Réaliser une procédure de départ sur quai </p>
                            <p>    - Travailler en équipe </p>
                        </div>
                    </div>
                </div>
                <h2>Parcours Académique</h2>
                <div className='liste'>
                    <div className='div-liste'>
                        <h3>Licence informatique</h3>
                    </div> 
                    <div className='div-liste'>
                        <p>UNIVERSITÉ DU MANS, LE MANS, 2020-2023</p>
                    </div>
                </div>
                <div className='liste'>
                    <div className='div-liste'>
                         <h3>Baccalauréat Scientifique</h3>
                    </div> 
                    <div className='div-liste'>
                        <p>LYCÉE NOTRE-DAME, LE MANS, 2017-2020 OPTION ISN</p>
                    </div>
                </div>
                <h2>Compétences</h2>
                <div>
                    <div className='compétence-col'>
                        <div className='colonne-end'>
                            <h4> Front-End </h4>
                            <p>    HTML 5</p>
                            <p>    CSS 3</p>
                            <p>    JavaScript</p>
                            <p>    Langage C</p>
                            <p>    Python</p>
                        </div>
                        <div className='colonne-end'>
                            <h4> Back-End </h4>
                            <p>    Node.Js</p>
                            <p>    MongoDB</p>
                            <p>    MySQL</p>
                        </div>
                        <div className='colonne'>
                            <h4> J'ai travaille avec </h4>
                            <p>    React</p>
                            <p>    TypeScript</p>
                            <p>    Sass</p>
                            <p>    Système de gestion de base de données</p>
                            <p>    MySQL</p>
                            <p>    Github</p>
                        </div>
                        <div className='colonne'>
                            <h4> Gestion projet </h4>
                            <p>    Conception web</p>
                            <p>    Utilisation de logiciel informatique</p>
                            <p>    Analyser et répondre aux demandes d'un client</p>
                            <p>    Concevoir et réaliser un projer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum