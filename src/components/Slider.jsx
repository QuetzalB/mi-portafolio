import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Número de elementos visibles a la vez
    slidesToScroll: 1, // Número de elementos que se desplazan a la vez
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <Navbar />
      <section id="home">
        <h1>¡Hola! Soy Quetzal y este es mi portafolio</h1>
      </section>
      
      <section id="about">
        <h2>Acerca de mí</h2>
        <p>¡Hola! Soy Quetzal, un desarrollador apasionado por la creación de aplicaciones Android...</p>

        <h3>Mis habilidades</h3>
        <Slider {...settings}>
          <div>
            <h4>Desarrollo Android</h4>
            <p>Aplicaciones móviles con <strong>Java</strong> y <strong>Kotlin</strong></p>
          </div>
          <div>
            <h4>Desarrollo Web</h4>
            <p>Front-end con <strong>React</strong> y <strong>JavaScript</strong></p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Aplicaciones backend con <strong>Python</strong> y <strong>Django</strong></p>
          </div>
          <div>
            <h4>Bases de Datos</h4>
            <p>Trabajo con <strong>MySQL</strong> y <strong>SQLite</strong></p>
          </div>
        </Slider>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p>Texto de ejemplo...</p>
      </section>
    </div>
  );
};

export default App;
