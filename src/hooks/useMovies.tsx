

import { Movie, MovieDBMoviesResponses } from '../interface/movieInterface';
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';


export const useMovies = () => {


    const [ isLoading, setIsLoading  ] = useState(true);
    const [ peliculasEnCine, setPeliculasEnCine ] = useState<Movie[]>([])
    const [ peliculasPopulares, setPeliculasPopulares ] = useState<Movie[]>([])



    const getMovies = async () => {

      const respNowPlaying = await movieDB.get<MovieDBMoviesResponses>('/now_playing');
      const respPopular = await movieDB.get<MovieDBMoviesResponses>('/popular');
      await movieDB.get<MovieDBMoviesResponses>('/top_rated');
      await movieDB.get<MovieDBMoviesResponses>('/upcoming');
      setPeliculasEnCine(respNowPlaying.data.results);
      setPeliculasPopulares(respPopular.data.results);

      setIsLoading(false);
      
  }

  useEffect(()=>{

    getMovies();
    
  },[])


    return {
      peliculasEnCine,
      peliculasPopulares,
      isLoading
    }
    
}
