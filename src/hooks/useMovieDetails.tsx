//custom hooksfuncion que le podemos anadir otros hooks y manejos de state

import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import {MovieFull} from '../interface/movieInterface';

interface MovieDetails{
    isLoading:boolean;
    movieFull:MovieFull;
    cast:any[];
}

export const useMovieDetails = ( movieId:number ) => {

  const [state, setstate] = useState<MovieDetails>();

  const getMovieDetails= async() =>{
      const resp = await movieDB.get<MovieFull>(`/${movieId}`);

      console.log(resp.data.overview)
  }

  useEffect(() => {
    getMovieDetails();
      
  }, []);

  return{
      state
  }
    
}
