import { useState, useEffect } from 'react'
import './App.css'

const API_GOT_URL = 'https://www.anapioficeandfire.com/api/';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_GOT_URL)
      .then(response => response.json())
      .then(data => {
        fetch(data.books)
          .then(response => response.json())
          .then(dataBooks => {
            const bookNames = dataBooks.map(book => book.name);
            setBooks(bookNames); // Almacena los nombres de los libros en el estado
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez al montar el componente.

  return (
    <div>
      <h1>Game Of Thrones Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;