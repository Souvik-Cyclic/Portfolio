import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ContactContainer = styled.div`
    padding: 40px 0;
    text-align: center;
    color: white;
    animation: ${fadeIn} 3s ease;
`;

const ContactIcons = styled.div`
    margin-top: 20px;
`;

const ContactLink = styled.a`
    color: white;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: goldenrod;
    }
`;

const ContactText = styled.p`
    color: white;
`;

const Contact = () => {
    return (
        <ContactContainer>
            <h1>Contact Me</h1>
            <div>
                <ContactText>
                    Mail me at : <a href="mailto:souvik.23bcs10132@sst.scaler.com" target="_blank" rel="noreferrer noopener" style={{ color: 'white' }}>souvik.23bcs10132@sst.scaler.com</a>
                </ContactText>
                <ContactText>
                    Connect with me on Linkedin: <a href="https://www.linkedin.com/in/souvik-cyclic/" target="_blank" rel="noreferrer noopener" style={{ color: 'white' }}>Souvik Kumar</a>
                </ContactText>
            </div>
            <ContactIcons>
                <ContactLink href="mailto:souvik.23bcs10132@sst.scaler.com" target="_blank" rel="noreferrer noopener"><FaEnvelope size={60} /></ContactLink>
                <ContactLink href="https://www.linkedin.com/in/souvik-cyclic/" target="_blank" rel="noreferrer noopener"><FaLinkedin size={60} /></ContactLink>
            </ContactIcons>
        </ContactContainer>
    );
}

export default Contact;
