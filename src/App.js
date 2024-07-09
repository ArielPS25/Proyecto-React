import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogEntry from './components/BlogEntry';
import CreateEditBlog from './components/CreateEditBlog';
import Sidebar from './components/Sidebar';
import EditPosts from './components/EditPosts';


const App = () => {
  const initialPosts = [
    {
      id: '1',
      title: '¿Qué es React?',
      content: 'React es una biblioteca de JavaScript de código abierto desarrollada por Facebook, utilizada para construir interfaces de usuario, especialmente para aplicaciones de una sola página (SPA). React se centra en la creación de componentes reutilizables que pueden gestionar sus propios estados. React se basa en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz2. Algunas de las características clave de React incluyen JSX que es una extensión de la sintaxis de JavaScript que permite incrustar código HTML en objetos JavaScript. JSX simplifica las estructuras de código complejas y ayuda a combatir los ataques Cross-Site Scripting. Virtual DOM: React utiliza un Modelo de Objetos del Documento (DOM) virtual para optimizar las actualizaciones de la interfaz de usuario sin afectar el DOM real3.',
      category: 'Tecnologia',
      isUserCreated: false,
    },
    {
      id: '2',
      title: 'Encontrando el Equilibrio Perfecto: Trabajo y Vida Personal',
      content: 'En la sociedad actual, es común que las personas se encuentren atrapadas en una rutina donde el trabajo ocupa la mayor parte de su tiempo y energía. Sin embargo, es fundamental encontrar un equilibrio entre el trabajo y la vida personal para mantener una buena salud mental y física. Recuerda que un equilibrio saludable entre el trabajo y la vida personal no solo mejora tu bienestar, sino que también te hace más productivo y satisfecho en todas las áreas de tu vida.',
      category: 'Estilo de vida',
      isUserCreated: false,
    },
    {
      id: '3',
      title: 'Playstation 6',
      content: 'La reciente filtración de que Playstation 6 existe como proyecto en Sony y que hay una fecha más o menos tentativa para el lanzamiento ha desatado la rumorología, los cálculos y toda suerte de vistazos a un futuro más o menos cercano. Los rumores apuntan a que en 2028. Es una información que viene avalada nada menos que por Microsoft. Son precisamente los grandes competidores de Sony los que han desvelado en la guerra en la Competition Markets Authority del Reino Unido que ambas compañías llevan manteniendo unos meses por culpa de la compra de Activision. Ese año tachado sería 2028, y tiene sentido porque en ese caso la PS5 habría durado siete años, que es el tiempo aproximado que Sony y Microsoft tardan en renovar sus consolas: Sony lanzó la PS1 en 1994, la PS2 en 2000, la PS3 en 2006, la PS4 en 2013 y la PS5 en 2020. Microsoft, por otro lado, lanzó la Xbox en 2001, la Xbox 360 en 2005, la Xbox One en 2013 y la Xbox Series S/X en 2020. Además, Sony publicó en 2021 una oferta de trabajo que sugería el desarrollo de una nueva consola para las oficinas de Sony en Tokio, San Mateo con vistas "a investigar y crear prototipos de tecnología de vanguardia y formas de aplicarla a nuestra plataforma y servicios".',
      category: 'Tecnologia',
      isUserCreated: false,
    },
    {
      id: '4',
      title: '¡"Intensamente 2" Está Aquí! Todo Lo Que Necesitas Saber',
      content: '¡Hola, amantes del cine! Hoy les traemos emocionantes noticias sobre una de las películas más esperadas del año: "Intensamente 2". Después de años de anticipación, Pixar finalmente nos trae la secuela de la querida película animada "Intensamente" (Inside Out), y no podemos esperar a compartir todos los detalles con ustedes. En "Intensamente 2", volvemos a encontrarnos con Riley, que ahora es una adolescente enfrentando los desafíos de la escuela secundaria. Las emociones Alegría, Tristeza, Miedo, Desagrado y Furia están de vuelta para guiarla a través de esta nueva etapa de su vida, llena de cambios y nuevas experiencias. "Intensamente 2" se estrenará en cines el 15 de noviembre de 2024. El tráiler oficial ya está disponible y nos ofrece un vistazo emocionante a lo que podemos esperar. Desde momentos hilarantes hasta escenas emotivas, el tráiler ha generado una gran expectativa entre los fanáticos.',
      category: 'Entretenimiento',
      isUserCreated: false,
    },
    {
      id: '5',
      title: 'Enner Valencia falla penal clave para Ecuador ante Argentina',
      content: 'Villano total. Enner Valencia tuvo en sus pies la posibilidad de cambiar la historia del partido que Ecuador pierde por la cuenta mínima ante Argentina en la Copa América, pero desperdició una tremenda opción. Cuando el reloj marcaba los 61′ de cotejo, los del Guayas tuvieron un penal a favor, pero su máxima figura definió de una forma particular y terminó errando su lanzamiento. Valencia colocó el balón de forma suave hacia la derecha de Emiliano Martínez, pero el balón dio en el palo y todos en Ecuador se tomaron la cabeza. El partido terminó empatado 1-1 en tiempo regular, pero Argentina ganó en la tanda de penales con un marcador de 4-21. Lionel Messi falló su cobro con un tiro a lo “panenka,” pero el portero Emiliano “Dibu” Martínez se convirtió en la figura al atajar dos cobros de los jugadores ecuatorianos',
      category: 'Deportes',
      isUserCreated: false,
    },
    {
      id: '6',
      title: 'El cuidado de su salud mental',
      content: 'El autocuidado significa dedicar tiempo a hacer cosas que le ayudan a vivir bien y a mejorar su salud física y mental. Esto puede ayudarle a controlar el estrés, disminuir su riesgo de contraer enfermedades y aumentar su nivel de energía. Hasta algunas acciones pequeñas de autocuidado en su vida diaria pueden generar un gran impacto. Si tiene dudas sobre su salud mental, hable con su médico u otro proveedor de atención primaria. Ellos pueden referirlo a un profesional de salud mental competente como un psicólogo, un psiquiatra o un trabajador social clínico, quien le puede ayudar a determinar los próximos pasos. Encuentre consejos para hablar con un proveedor de atención médica sobre su salud mental.Puede obtener más información sobre cómo obtener ayuda en el sitio web del Instituto Nacional de la Salud Mental (NIMH, por sus siglas en inglés). También puede aprender más sobre cómo encontrar apoyo  y localizar servicios de salud mental  (en inglés) en su área en el sitio web de la Administración de Servicios de Abuso de Sustancias y Salud Mental (SAMHSA, por sus siglas en inglés).',
      category: 'Salud',
      isUserCreated: false,
    },
  ];

  // Función para cargar datos desde localStorage
  const loadFromLocalStorage = (key, fallback) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : fallback;
  };

  // Cargar publicaciones y comentarios desde localStorage
  const [posts, setPosts] = useState(() => loadFromLocalStorage('posts', initialPosts));
  const [comments, setComments] = useState(() => loadFromLocalStorage('comments', {}));
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Tecnologia' },
    { id: 2, name: 'Estilo de vida' },
    { id: 3, name: 'Deportes' },
    { id: 4, name: 'Salud' },
    { id: 5, name: 'Entretenimiento' }
  ];

  // Guarde los datos en localStorage cada vez que cambien las publicaciones o los comentarios
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const addComment = (postId, comment) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment]
    }));
  };

  const deleteComment = (postId, index) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: prevComments[postId].filter((_, i) => i !== index)
    }));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    const newComments = { ...comments };
    delete newComments[postId];
    setComments(newComments);
  };

  const addPost = (post) => {
    setPosts([...posts, { ...post, isUserCreated: true }]);
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route 
            exact path="/" 
            element={
              <>
                <Sidebar 
                  categories={categories} 
                  onSelectCategory={handleSelectCategory} 
                  selectedCategory={selectedCategory} 
                />
                <BlogList posts={posts} selectedCategory={selectedCategory} />

              </>
            } 
          />
          <Route 
            path="/post/:id" 
            element={<BlogEntry posts={posts} comments={comments} addComment={addComment} deleteComment={deleteComment} />} 
          />
          <Route 
            path="/create" 
            element={<CreateEditBlog posts={posts} setPosts={addPost} categories={categories} />} 
          />
          <Route 
            path="/edit/:id" 
            element={<CreateEditBlog posts={posts} setPosts={setPosts} categories={categories} />} 
          />
          <Route 
            path="/edit-posts" 
            element={<EditPosts posts={posts} deletePost={deletePost} />} 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};


export default App;
