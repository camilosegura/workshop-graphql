import React, { useCallback, useState } from 'react';
import Post from './Post';

const POSTS = [
  {
    title: 'Post title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies non erat ac ultrices. Etiam nibh mauris, laoreet vel aliquet ut, pretium nec neque. Quisque auctor tincidunt lacus in placerat. Duis porttitor gravida urna, vitae sollicitudin erat finibus sit amet. Suspendisse luctus neque eget semper egestas. Vivamus eu lectus nunc. Sed vehicula nibh in quam elementum aliquam. Proin consectetur ac dolor sit amet feugiat. Nunc felis nibh, malesuada vitae ultricies vel, gravida quis nulla.',
    favorite: false,
  },
  {
    title: 'Post title 2',
    description: 'Cras nulla felis, vulputate et leo nec, vestibulum posuere quam. Donec eget felis leo. Nunc non viverra tortor. Etiam volutpat massa vel augue ornare, sed efficitur dui commodo. Donec mollis massa odio, ac efficitur velit commodo eu. In ipsum felis, pulvinar vel arcu ut, mattis sollicitudin leo. Phasellus ullamcorper metus eget nibh sollicitudin, ac volutpat lectus pulvinar.',
    favorite: false,
  },
  {
    title: 'Post title 3',
    description: 'Cras cursus cursus condimentum. Proin tempus, metus vitae pellentesque eleifend, quam leo tempus dui, tempus ultrices nibh urna ut risus. Aenean vitae dictum magna. Fusce sapien sem, accumsan sed turpis id, tempor consectetur velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse congue odio sollicitudin efficitur sodales. Donec pulvinar diam libero, nec malesuada ipsum rutrum sed. Proin malesuada blandit mauris et accumsan. Sed non lobortis dolor. Etiam tempus est eu nunc venenatis, at vehicula magna consequat. Fusce suscipit rhoncus elit. Nulla posuere quis lorem eget venenatis. Integer nec elit nulla. Morbi felis dolor, tincidunt vitae tincidunt sit amet, scelerisque at ligula.',
    favorite: false,
  },
  {
    title: 'Post title 4',
    description: 'Fusce varius augue nec posuere venenatis. Proin quis lectus non ante viverra malesuada et at dolor. Duis a purus id velit semper interdum. Etiam lobortis ut lectus in lobortis. Nullam at faucibus dui. Curabitur imperdiet ante et dui accumsan varius. Sed vehicula tempor sem ut interdum. Maecenas placerat vulputate ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus velit leo, non tristique risus bibendum non. Phasellus interdum, ligula a vestibulum molestie, nibh orci varius velit, et lacinia elit ipsum lacinia dolor. Aenean faucibus neque non augue malesuada, nec facilisis elit auctor. Etiam ex odio, sagittis eu turpis tempor, pretium aliquam nulla. Aenean elementum tempor neque at consectetur.',
    favorite: false,
  },
  {
    title: 'Post title 5',
    description: 'Nulla malesuada metus quis placerat convallis. Aliquam erat volutpat. Vestibulum lectus tortor, pretium ac orci non, condimentum lacinia diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ligula vel lacus tincidunt tincidunt. Sed vel elit risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ultricies tincidunt nisi, a cursus nibh facilisis ac. Proin vitae lacus imperdiet, elementum quam vel, pellentesque nunc. Donec sed tellus accumsan, posuere mi at, scelerisque ipsum. Nam lobortis purus tortor, sit amet posuere risus venenatis sit amet. Aliquam nibh ex, malesuada nec vestibulum ut, euismod at lectus. Sed dignissim felis ante, vel malesuada metus molestie id.',
    favorite: false,
  },
  {
    title: 'Post title 6',
    description: 'Fusce varius augue nec posuere venenatis. Proin quis lectus non ante viverra malesuada et at dolor. Duis a purus id velit semper interdum. Etiam lobortis ut lectus in lobortis. Nullam at faucibus dui. Curabitur imperdiet ante et dui accumsan varius. Sed vehicula tempor sem ut interdum. Maecenas placerat vulputate ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus velit leo, non tristique risus bibendum non. Phasellus interdum, ligula a vestibulum molestie, nibh orci varius velit, et lacinia elit ipsum lacinia dolor. Aenean faucibus neque non augue malesuada, nec facilisis elit auctor. Etiam ex odio, sagittis eu turpis tempor, pretium aliquam nulla. Aenean elementum tempor neque at consectetur.',
    favorite: true,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(POSTS);

  const removePost = useCallback((index) => {
    const newPosts = [
      ...posts,
    ];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  }, [posts]);

  return posts
    .map(props => ({
      ...props,
      removePost,
    }))
    .map(Post);
};

export default Posts;
