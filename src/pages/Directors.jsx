import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      const response = await fetch("http://localhost:3000/directors");
      const data = await response.json();
      setDirectors(data);
    };
    fetchDirectors();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;



