import React, { useState } from 'react';
import './Message.css';

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
                            <label htmlFor="email">EMAIL : </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='champ-saisi'
                                value={email}
                            />
                        </div>
                        <div className="saisi">
                            <label htmlFor="objet">OBJET : </label>
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
                            <label htmlFor="name">NOM : </label>
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
                            <label htmlFor="message">MESSAGE : </label>
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
                            <a href={`mailto:maximedreux@orange.f?subject=${objet}&body=NOM : ${name} %0AMESSAGE : ${message}`} className='envoyer'>Envoyer</a>
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
                    <div>
                        <h3>RESEAUX SOCIAUX</h3>
                        <div><a href="https://linkedin.com/in/maxime-dreux">LINKEDIN</a></div>
                        <div><a href="https://github.com/Maxms17">GITHUB</a></div>
                        <div><a href="https://www.instagram.com/maxime.d7">INSTAGRAM</a></div>
                    </div>
                </div>
               
            </div>
    );
}

export default Message;
