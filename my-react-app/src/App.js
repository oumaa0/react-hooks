import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://i.discogs.com/hFgvkx_-99VLmJa95EaGsi_zf1itMJ6iTtOm5Ok6vQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyODU2/NzgtMTQ5NTY1OTg5/MC01NDUwLmpwZWc.jpeg', rating: 8.8 },
    { title: 'The Shawshank Redemption', description: 'A story of hope and redemption', posterURL: 'https://i.pinimg.com/736x/57/50/7a/57507ac290824b8cdb338432a0c6a98b.jpg', rating: 9.3 },

  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (name, value) => {
    if (name === 'title') {
      const filtered = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredMovies(filtered);
    } else if (name === 'rating') {
      const filtered = movies.filter(movie => movie.rating >= parseFloat(value));
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Movie Collection</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
