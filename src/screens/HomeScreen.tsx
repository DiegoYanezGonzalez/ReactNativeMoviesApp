import React from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {

   const {peliculasEnCine,isLoading} = useMovies();
   const {top} = useSafeAreaInsets();

  if (isLoading){
    return(
        <View style={{flex:1, justifyContent:"center", alignContent:"center" }}>
            <ActivityIndicator color='red' size={70} />
        </View>
    )
  }

    return (
        <View style={{marginTop:top}}>
           <MoviePoster
           movie={ peliculasEnCine[0]}
           />
        </View>
    )
}
