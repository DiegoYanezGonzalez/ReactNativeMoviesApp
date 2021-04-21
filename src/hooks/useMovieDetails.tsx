//custom hooksfuncion que le podemos anadir otros hooks y manejos de state

import { useEffect, useState } from 'react';
import movieDB from  '../api/movieDB';
import { Cast, CreditsResponse } from '../interface/creditsInterface';
import {MovieFull} from '../interface/movieInterface';

interface MovieDetails {
    isLoading:boolean;
    movieFull?:MovieFull;
    cast:Cast[];
}

export const useMovieDetails = ( movieId:number ) => {

  const [state, setState] = useState<MovieDetails>({
      isLoading:true, 
      movieFull:undefined,
      cast:[]
  });

  const getMovieDetails= async() =>{
      const movieDetailsPromise= movieDB.get<MovieFull>(`/${movieId}`);
      const castPromise= movieDB.get<CreditsResponse>(`/${movieId}/credits`);


       const [ movieDetailResp, castPromiseresp  ] = await Promise.all([movieDetailsPromise,castPromise]);
      
      setState({
          isLoading:false,
          movieFull:movieDetailResp.data,
          cast:castPromiseresp.data.cast
      })

  }

  useEffect(() => {
    getMovieDetails();
      
  }, []);

  return{
      isLoading:state.isLoading,
      movieFull:state.movieFull,
      cast:state.cast
  }
    
}
