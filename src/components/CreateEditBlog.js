import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const CreateEditBlog = ({ posts, setPosts, categories }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (isEditing) {
      const post = posts.find(p => p.id === id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category);
      }
    }
  }, [id, isEditing, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPosts(posts.map(post => (post.id === id ? { ...post, title, content, category } : post)));
    } else {
      const newPost = {
        id: String(posts.length + 1),
        title,
        content,
        category,
        isUserCreated: true,
      };
      setPosts(newPost);
    }
    navigate('/');
  };

  return (
    <div className="post-form">
      <h2>{isEditing ? 'Editar Post' : 'Crear Post'}</h2>
      <form className='wide-form' onSubmit={handleSubmit}>
        <div>
          <label>Titulo</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Contenido</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Categoria</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Seleccione categoria</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
        <button type="submit">{isEditing ? 'Actualiar Post' : 'Crear Post'}</button>
      </form>
    </div>
  );
};

export default CreateEditBlog;
