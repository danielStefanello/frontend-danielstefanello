import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { List, GoBack } from './styles';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const response = await api.get('/jobs');

      const { data } = response;

      setJobs(data);
    }

    loadJobs();
  }, []);

  return (
    <>
      <GoBack>
        <Link to="/">Voltar</Link>
      </GoBack>
      <List>
        {jobs.map(job => (
          <li
            key={job.id}
            style={{
              backgroundImage: `url(http://localhost:3333/files/${job.images[0].path})`,
            }}
          >
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </List>
    </>
  );
}
