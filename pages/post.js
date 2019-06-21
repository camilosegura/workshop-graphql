import React from 'react';
import Button from '@material-ui/core/Button';

const handleClick = () => {
  console.log('onClick');
};

const Post = () => (
  <div>
    <h1>Welcome to my Post</h1>
    <Button variant="contained" color="secondary" onClick={handleClick}>
        Post
    </Button>
  </div>
);

export default Post;
