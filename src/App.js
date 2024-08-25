import './App.css';
import React, { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'This is the content of post 1.' },
    { title: 'Post 2', content: 'This is the content of post 2.' },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm onAddPost={handleAddPost} />
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
