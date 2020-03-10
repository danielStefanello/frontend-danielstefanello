import React, { Component } from 'react';

import api from '../../services/api';
import { List } from './styles';

export default class Jobs extends Component {
  state = {
    jobs: [],
  };

  async componentDidMount() {
    const { jobs } = this.state;

    const response = await api.get('/jobs');

    const data = {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
    };

    this.setState({
      jobs: [...jobs, data],
    });

    console.log(data);
  }

  render() {
    const { jobs } = this.state;

    return (
      <List>
        {jobs.map(job => (
          <li key={String(job.id)}>
            <h2>
              {job.id} - {job.login}
            </h2>
            <p>{job.login}</p>
          </li>
        ))}
      </List>
    );
  }
}
