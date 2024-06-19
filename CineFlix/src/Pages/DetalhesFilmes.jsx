import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalhesFilmes() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-Br`)
      .then(response => response.json())
      .then(data => setFilme(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="bg-gray-900 min-h-screen p-10 pt-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`} alt={filme.title} />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{filme.title}</h1>
            <p className="text-white mb-4">{filme.overview}</p>
            <p className="text-white">Avaliação: {filme.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilmes;
