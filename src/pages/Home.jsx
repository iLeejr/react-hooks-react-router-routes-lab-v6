import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'; 

const Home = () => {
  const movies = [
    { id: 1, title: 'Doctor Strange' },
    { id: 2, title: 'Trolls' },
    { id: 3, title: 'Jack Reacher: Never Go Back' },
  ];

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <main>
        {movies.map(movie => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Home;



