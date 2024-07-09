import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const BlogEntry = ({ posts, comments, addComment, deleteComment }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const postComments = comments[id] || [];
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(id, newComment.trim());
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    deleteComment(id, index);
  };

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="comments">
        <h3>Comentarios</h3>
        <ul>
          {postComments.map((comment, index) => (
            <li key={index}>
              {comment}
              <button onClick={() => handleDeleteComment(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <textarea 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="Escribir comentario"
        />
        <button onClick={handleAddComment}>Añadir comentario</button>
      </div>
    </div>
  );
};

export default BlogEntry;

