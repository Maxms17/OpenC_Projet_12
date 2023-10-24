import React, { useState } from 'react';
import './Message.css';

import LogoLink from '../../assets/linkedin_icon.svg';
import LogoGit from '../../assets/github_icon.svg';
import LogoInsta from '../../assets/instagram_icon.svg';

function Message() {
    const email = "maximedreux@orange.fr";
    const [objet, setObjet] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleObjetChange = (e) => {
        setObjet(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className='page-contact'>
            <div className='contact'>
                <div className='titre'>
                    <div className='titre-bleu-M'>
                        <h2>CONTACTEZ-MOI</h2>
                    </div>
                    <div className='titre-noir-M'>
                        <h2>CONTACTEZ-MOI</h2>
                    </div>
                </div>
                <form>
                    <div className="saisi">
                        <label htmlFor="email">EMAIL :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='champ-saisi'
                            value={email}
                            readOnly
                        />
                    </div>
                    <div className="saisi">
                        <label htmlFor="objet">OBJET :</label>
                        <input
                            type="text"
                            id="objet"
                            name="objet"
                            className='champ-saisi'
                            value={objet}
                            onChange={handleObjetChange}
                        />
                    </div>
                    <div className="saisi">
                        <label htmlFor="name">NOM :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className='champ-saisi'
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="saisi-message">
                        <label htmlFor="message">MESSAGE :</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={10}
                            cols={5}
                            className='champ-saisi-text'
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>
                    <div className="btn-envoyer">
                        <a href={`mailto:${email}?subject=${objet}&body=NOM : ${name}%0AMESSAGE : ${message}`} className='envoyer'>Envoyer</a>
                    </div>
                </form>
            </div>
            <div className='info'>
                <h2>CONTACT INFO</h2>
                <div>
                    <h3>TELEPHONE</h3>
                    <p>06 72 12 21 92</p>
                </div>
                <div>
                    <h3>EMAIL</h3>
                    <p>maximedreux@orange.fr</p>
                </div>
                <div className='info-reseaux'>
                    <h3>RESEAUX SOCIAUX</h3>
                    <div>
                        <a href="https://linkedin.com/in/maxime-dreux">
                            <img src={LogoLink} alt="Linkedin" className='image-info' />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Maxms17">
                            <img src={LogoGit} alt="Github" className='image-info' />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/maxime.d7">
                            <img src={LogoInsta} alt="Instagram" className='image-info' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
