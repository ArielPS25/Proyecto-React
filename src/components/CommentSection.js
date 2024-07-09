// src/components/CommentSection.js
import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = { id: Date.now().toString(), text: comment, postId };
    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <div>
      <h3>Comentarios</h3>
      <ul>
        {comments.filter(c => c.postId === postId).map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CommentSection;
