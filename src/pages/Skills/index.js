import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, Menu, Categories, Techs } from './styles';

export default function Main() {
  const [categories, setCategories] = useState([]);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [cat, tec] = await Promise.all([
        api.get('/categories'),
        api.get('/techs'),
      ]);

      setCategories(cat.data);
      setTechs(tec.data);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Menu>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>-</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Menu>
      <Categories>
        {categories.map(category => (
          <li key={category.id}>
            <span />
            <h3>{category.name}</h3>
            <p>Um texto sobre a categoria citada, falando do que se trata.</p>
          </li>
        ))}
      </Categories>
      <Techs>
        {techs.map(tech => (
          <h3 key={tech.id}>{tech.name}</h3>
        ))}
      </Techs>
    </Container>
  );
}
