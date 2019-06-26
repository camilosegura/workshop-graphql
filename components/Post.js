import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

const Post = ({ title, description, favorite }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      {favorite && <MoreVertIcon>star</MoreVertIcon> }
      <TextField
        id="standard-name"
        label="Name"
        // className={classes.textField}
        value={description}
        // onChange={handleChange('name')}
        margin="normal"
        multiline
      />
      <Button variant="contained" color="primary">
        Update
      </Button>
    </CardContent>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  favorite: PropTypes.bool,
};

Post.defaultProps = {
  description: '',
  favorite: false,
};

export default Post;
