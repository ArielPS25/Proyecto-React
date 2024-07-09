import React from 'react';


const Sidebar = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <aside>
      <h3>Categorias</h3>
      <ul>
        <li 
          className={!selectedCategory ? 'active' : ''} 
          onClick={() => onSelectCategory(null)}
        >
          Todo
        </li>
        {categories.map((category) => (
          <li 
            key={category.id} 
            className={selectedCategory === category.name ? 'active' : ''} 
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div className="category-images">
      <a href="https://react.dev/">
      <img src="https://cdn-icons-png.flaticon.com/128/6422/6422225.png" alt="Imagen de ejemplo" />
      <img src="https://cdn-icons-png.flaticon.com/128/3393/3393920.png" alt="Imagen de ejemplo" />
      <img src="https://cdn-icons-png.flaticon.com/128/2239/2239751.png" alt="Imagen de ejemplo" />
    </a>
    </div>
    </aside>
  );
};

export default Sidebar;


