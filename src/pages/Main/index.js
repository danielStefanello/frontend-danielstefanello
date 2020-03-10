import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, Footer, Logo } from './styles';

import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import whatsapp from '../../assets/whatsapp.svg';
import discord from '../../assets/discord.svg';

export default function Main() {
  return (
    <Container>
      <Menu>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Menu>
      <Logo>
        <img src={logo} alt="Daniel Stefanello" />
      </Logo>
      <Footer>
        <li>
          <a href="https://www.instagram.com/ddstefanello/" target="blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ddstefanello/" target="blank">
            <img src={linkedin} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ddstefanello/" target="blank">
            <img src={whatsapp} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ddstefanello/" target="blank">
            <img src={discord} alt="Instagram" />
          </a>
        </li>
      </Footer>
    </Container>
  );
}
