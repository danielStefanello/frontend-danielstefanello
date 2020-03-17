import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { List, Link } from './styles';

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
    <List>
      {jobs.map(job => (
        <li
          key={job.id}
          style={{
            backgroundImage: `url(http://localhost:3333/files/${job.images[0].path})`,
          }}
        >
          <Link to="">{job.title}</Link>
        </li>
      ))}
    </List>
  );
}
