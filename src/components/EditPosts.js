import React from 'react';
import { Link } from 'react-router-dom';


const EditPosts = ({ posts, deletePost }) => {
  const userCreatedPosts = posts.filter(post => post.isUserCreated);

  return (
    <div className='edit-delete'>
      <h2>Eliminar o editar posts</h2>
      <ul>
        {userCreatedPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/edit/${post.id}`}>{post.title}</Link>
            <button onClick={() => deletePost(post.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditPosts;
