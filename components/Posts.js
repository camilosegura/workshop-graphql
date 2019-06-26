import React from 'react';
import useRemoveFromArray from './hooks/useRemoveFromArray';
import Post from './Post';
import postsQuery from './graphql/postsQuery';
import Loading from './Loading';
import useQuery from './hooks/useQuery';

const Posts = () => {
  const response = useQuery(postsQuery);

  const [post, removePost] = useRemoveFromArray(response.data.posts);

  return (response.loading ? <Loading /> : post
    .map(props => ({
      ...props,
      removePost,
    }))
    .map(Post)
  );
};

export default Posts;
