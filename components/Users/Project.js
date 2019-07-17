import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = {
  card: {
    maxWidth: '275px',
    display: 'inline-block',
  },
};

// eslint-disable-next-line react/prop-types
const Project = ({ id, name }) => {

  return (
    <Card key={id} style={useStyles.card}>
      <CardContent>
        <Typography variant="h5" component="h4">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
