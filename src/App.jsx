import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaJava, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiKotlin, SiDjango, SiMysql, SiSqlite } from 'react-icons/si';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      
      <section id="home">
        <h1>¡Hola! Soy Quetzal y este es mi portafolio</h1>
      </section>

      <section id="about">
        <h2>Acerca de mí</h2>
        <p>
          ¡Hola! Soy Quetzal, un desarrollador apasionado por la creación de
          aplicaciones Android, Aplicaciones Web, y todos los retos relacionados con la programación
          mi sueño es ser un FullStack.
        </p>

        <h3>Mis habilidades</h3>
        <Slider {...settings}>
          <div>
            <FaJava size={50} color="#f89820" />
            <SiKotlin size={50} color="#0095d5" />
            <h4>Desarrollo Android</h4>
            <p>Aplicaciones móviles con <strong>Java</strong> y <strong>Kotlin</strong></p>
          </div>
          <div>
            <FaReact size={50} color="#61dafb" />
            <h4>Desarrollo Web</h4>
            <p>Front-end con <strong>React</strong> y <strong>JavaScript</strong></p>
          </div>
          <div>
            <FaPython size={50} color="#3776AB" />
            <SiDjango size={50} color="#092E20" />
            <h4>Backend</h4>
            <p>Aplicaciones backend con <strong>Python</strong> y <strong>Django</strong></p>
          </div>
          <div>
            <FaDatabase size={50} color="#f29111" />
            <SiMysql size={50} color="#00758F" />
            <SiSqlite size={50} color="#003B57" />
            <h4>Bases de Datos</h4>
            <p>Trabajo con <strong>MySQL</strong> y <strong>SQLite</strong></p>
          </div>
        </Slider>
      </section>
      <section id="projects">
  <h2>Mis Proyectos</h2>
  <Slider {...settings}>
    <div>
      <img
        src="src/images/capybaland.png"
        alt="Capybaland"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '1rem',
        }}
      />
      <h3>Capybaland</h3>
      <p>
        Videojuego en desarrollo, basado en un MMORPG no lineal donde el objetivo es completar
        minijuegos multijugador y así conocer nuevos amigos en la isla.
      </p>
    </div>
    <div>
      <img
        src="src/images/durma.jpg"
        alt="Sistema de Almacén Durma"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '1rem',
        }}
      />
      <h3>Sistema de Almacén Durma</h3>
      <p>
        Sistema de registros dentro de un almacén de una empresa llamada Durma. Gestión
        eficiente de inventarios y datos.
      </p>
    </div>
  </Slider>
</section>
<section id="contact">
  <h2>Contacto</h2>
  <p>¡No dudes en ponerte en contacto conmigo!</p>
  <div className="contact-info">
    <div className="contact-item">
      <strong>Email:</strong> <a href="mailto:hqbp617@gmail.com">hqbp617@gmail.com</a>
    </div>
    <div className="contact-item">
      <strong>Teléfono:</strong> <a href="tel:+5652630435">5652630435</a>
    </div>
    <div className="contact-item">
      <strong>GitHub:</strong>{' '}
      <a href="https://github.com/QuetzalB" target="_blank" rel="noopener noreferrer">
        github.com/QuetzalB
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default App;