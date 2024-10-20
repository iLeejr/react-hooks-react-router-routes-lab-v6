import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      const response = await fetch("http://localhost:3000/actors");
      const data = await response.json();
      setActors(data);
    };
    fetchActors();
  }, []);

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
