import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

   const {nowPlaying,popular,topRated,upcoming,isLoading} = useMovies();
   const {top} = useSafeAreaInsets();

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
