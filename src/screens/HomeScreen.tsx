import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';

import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColores';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

   const {nowPlaying,popular,topRated,upcoming,isLoading} = useMovies();
   const {top} = useSafeAreaInsets();

   const getPosterColors = async (index : number) =>{
      const movie = nowPlaying[index];
      const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const [primary, secondary] = await getImageColors(uri);

      console.log({primary,secondary});
     
   }

  if (isLoading){
    return(
        <View style={{flex:1, justifyContent:"center", alignContent:"center" }}>
            <ActivityIndicator color='red' size={70} />
        </View>
    )
  }

    return (
  <GradientBackground>

    
    <ScrollView>

        <View style={{marginTop:20}}>
          <View style={{height:440}}>
          
          <Carousel 
          data={nowPlaying!}
          renderItem={ ( {item }: any ) => <MoviePoster movie={item}/>}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
          onSnapToItem={ index=>getPosterColors(index) }
          />
          </View>

          <View>
          {/* Peliculas Popular */}
            <HorizontalSlider 
            title="En Populares"
            movies={popular!}
            />
            <HorizontalSlider 
            title="Top Rated"
            movies={topRated!}
            />

            <HorizontalSlider 
            title="Upcoming"
            movies={upcoming!}
            /> 
          </View>
          </View>
      </ScrollView>
  </GradientBackground>
  
    )
}
