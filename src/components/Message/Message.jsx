import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('../../enregistrer_message.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Error when saving the message');
            }
        });
    };

    render() {
        return (
            <div className='page-contact'>
                <div className='contact'>
                    <div className='titre'>
                        <div className='titre-bleu'>
                            <h2>CONTACTEZ-NOUS</h2>
                        </div>
                        <div className='titre-noir'>
                            <h2>CONTACTEZ-NOUS</h2>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="saisi">
                            <label htmlFor="name">NOM :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                className='champ-saisi'
                            />
                        </div>
                        <div className="saisi">
                            <label htmlFor="email">EMAIL :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                className='champ-saisi'
                            />
                        </div>
                        <div className="saisi-message">
                            <label htmlFor="message">MESSAGE :</label>
                            <textarea
                                id="message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                rows={10}
                                cols={5}
                                className='champ-saisi-text'
                            />
                        </div>
                        <button type="submit" className='envoyer'>ENVOYER</button>
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
                        <p>LINKEDIN</p>
                        <p>INSTAGRAM</p>
                        <p>GITHUB</p>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Message;
