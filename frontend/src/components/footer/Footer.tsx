import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Logo from '../shared/Logo';

const footerStyles: React.CSSProperties = {
    backgroundColor: '#424242',
    padding: '20px',
};

const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' , // Ensures TypeScript accepts this
    maxWidth: '1300px',
    margin: '0 auto',
};

const rowStyles: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
};

const columnStyles: React.CSSProperties = {
    flex: '1',
    margin: '0px',
    minWidth: '350px',
};

const headerStyles: React.CSSProperties = {
    marginBottom: '15px',
    fontSize: '1.5em',
    textAlign:'center',
};

const iconsStyles: React.CSSProperties = {
    marginTop: '20px',
};

const iconStyles: React.CSSProperties = {
    margin: '0 30px',
    fontSize: '24px',
    color: '#ce93d8',
   
};

const listStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
    marginLeft: '150px'
    //textAlign:'center',
};

const listItemStyles: React.CSSProperties = {
    marginBottom: '8px',
};

const linkStyles: React.CSSProperties = {
    textDecoration: 'none',
    color: '#ea80fc',
};

const bottomStyles: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '0.875em',
    color: '#6c757d',
};

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <div style={containerStyles}>
                <div style={rowStyles}>
                    <div style={columnStyles}>
                      <Logo/>
                        <p>Kumiai-Bot is an AI-driven chatbot that enhances user experience by providing instant, accurate responses and automating tasks for efficient, personalized support and engagement.</p>
                        <div style={iconsStyles}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                    <div style={columnStyles}>
                        <h5 style={headerStyles}>Quick Links</h5>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>
                                <a href="https://openai.com/" style={linkStyles}>OpenAI</a>
                            </li>
                            <li style={listItemStyles}>
                                <a href="/signup" style={linkStyles}>Signup </a>
                            </li>
                            <li style={listItemStyles}>
                                <a href="/login" style={linkStyles}>Login</a>
                            </li>
                            <li style={listItemStyles}>
                                <a href="/chat" style={linkStyles}>Chat</a>
                            </li>
                        </ul>
                    </div>
                    <div style={columnStyles}>
                        <h5 style={headerStyles}>Contact Info</h5>
                        <p><FontAwesomeIcon icon={faPhoneVolume} style={iconStyles} /> +94 710890875</p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={iconStyles} /> kumesharashmi918@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPaperPlane} style={iconStyles} /> University of Ruhuna,Faculty of Engineering.</p>
                    </div>
                </div>
            </div>
            <div style={bottomStyles}>
                <p>Develop by Kumesha Rashmi</p>
            </div>
        </footer>
    );
}

export default Footer;
