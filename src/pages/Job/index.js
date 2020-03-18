import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

export default function Job({ match }) {
  const [job, setJob] = useState('');
  const [client, setClient] = useState({});
  const [images, setImages] = useState([]);
  const [techs, setTechs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadJob() {
      const response = await api.get(`/jobs/${match.params.job_id}`);

      const loadClient = response.data.client;

      const resImages = response.data.images.map(image => (
        <img key={image.id} src={`http://localhost:3333/files/${image.path}`} />
      ));

      const resTechs = response.data.techs.map(tech => (
        <li key={tech.id}>{tech.name}</li>
      ));

      const resCategories = response.data.categories.map(category => (
        <li key={category.id}>{category.name}</li>
      ));

      setJob(response.data);
      setClient(loadClient);
      setImages(resImages);
      setTechs(resTechs);
      setCategories(resCategories);
    }

    loadJob();
  }, [match]);

  return (
    <Container>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Cliente: {client.name}</p>
      <p>Images:</p>
      <div>{images}</div>
      <p>Techs:</p>
      <ul>{techs}</ul>
      <p>Categories:</p>
      <ul>{categories}</ul>
      <Link to="/jobs">Voltar</Link>
    </Container>
  );
}
