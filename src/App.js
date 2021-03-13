import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';
import logo from './logo.png';

function App() {

  // State de la app
  const [search, saveSearch] = useState('');
  const [images, saveImages] = useState([]);
  const [actualPage, saveActualPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(1);

  useEffect(() => {
    
    const consultAPI = async () => {
      if(search === '') return;

      const imagesPerPage = 30;
      const key = 'YOUR_API_KEY';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

      const answer = await fetch(url);
      const result = await answer.json();

      saveImages(result.hits);

      // Calcular el total de paginas
      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage);
      saveTotalPages(calculateTotalPages);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    consultAPI();

  }, [search, actualPage]);

  // Definir la pagina anterior
  const previousPage = () => {
    const newActualPage = actualPage - 1;

    if(newActualPage === 0) return;

    saveActualPage(newActualPage);
  }

  // Definir la pagina siguiente
  const nextPage = () => {
    const newActualPage = actualPage + 1;

    if(newActualPage > totalPages) return;

    saveActualPage(newActualPage);    
  }

  return (
    <div className="container bg-light">
      <div className="jumbotron bg-light mt-4 border-dark">
        <div className="row">
          <div className="col">
            <p className="lead text-left font-weight-bold">Search for images without copyright</p>
          </div>
          <div className="col">
            <img className="float-right mr-3" src={logo} alt="logo react" width="60px"/>
            
          </div>
        </div>
        
        <hr className="my-4"></hr>
        <Form 
          saveSearch = {saveSearch}
        />
      </div>
      <hr className="my-4"></hr>
      <div className="row justify-content-center">
        <ImagesList 
          images = {images}
        />
        { (actualPage === 1) ? null : (
          <button
            type = "button"
            className = "btn btn-dark mr-1 mb-5"
            onClick = {previousPage}
          >&laquo; Previous </button>
        ) }

        { (actualPage === totalPages) ? null : (
          <button
            type = "button"
            className = "btn btn-dark mb-5"
            onClick = {nextPage}
          >Next &raquo;</button>
        ) }
      </div>
    </div>
  );
}

export default App;
