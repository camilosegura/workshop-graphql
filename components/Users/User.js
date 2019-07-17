import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

const User = ({
  // eslint-disable-next-line react/prop-types
  id, name, email, projects,
}) => (
  <Card key={id}>
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography color="textSecondary">
        <a href={`mailto:${email}`}>&lt;{email}&gt;</a>
      </Typography>
      {projects.map(Project)}
    </CardContent>
  </Card>
);

export default User;
