import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, Profile } from './styles';

import profileImage from '../../assets/profileImage.jpg';

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
          <Link to="/">Home</Link>
        </li>
      </Menu>
      <Profile>
        <img src={profileImage} alt="Daniel Stefanello" />
        <span />
        <p>
          - Daniel Deffaci Stefanello, gaúcho, cursando Ciências da Computação
          na Universidade Luterana do Brasil (Ulbra), focado em programação
          moderna, utilizando as ferramentas mais atuais do mercado. Programador
          NodeJS, ReactJS e React Native, conhecimentos básicos em C, está
          cursando o 4º semestre da sua graduação. Desenvolve trabalhos de
          Design Gráfico.
        </p>
        <span />
        <p>
          - Técnico em mecânica forma pelo Senai/RS, com mais de 10 anos de
          experiência na área de projetos 3D, prototipagem digital,
          desenvolvimento e design de produto, documentação de máquinas,
          desenhos técnicos, nacionalização de projetos, renderização, animações
          técnicas 3D, com conhecimento prático nos principais softwares de
          desenho do mercado, também habituado a técnicas como engenharia
          reversa, manufatura aditiva entre outras. Possui forte aptidão ao
          desenvolvimento de produtos com foco na área comercial.
        </p>
      </Profile>
    </Container>
  );
}
