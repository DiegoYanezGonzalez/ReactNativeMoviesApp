import React from 'react';
import { View, Text, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

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

    <ScrollView>

      <View>
        <View style={{height:440}}>
         
         <Carousel 
         data={peliculasEnCine}
         renderItem={ ( {item }: any ) => <MoviePoster movie={item}/>}
         sliderWidth={windowWidth}
         itemWidth={300}
         />
        </View>

        <View>
              {/* Peliculas Popular */}
         <View style={{backgroundColor:'yellow', height:260 }} >
           <Text style={{fontSize:30, fontWeight:'bold',marginLeft:20}} >En Cines</Text>
            <FlatList
               data={peliculasEnCine}
               renderItem={ ( {item }: any ) =>(
                  <MoviePoster movie={item} width={140}height={180} />
                  )}
               keyExtractor={(item) => item.id.toString() }
               horizontal={true}
               showsHorizontalScrollIndicator={false}
            />
          </View>

          </View>
        </View>
      </ScrollView>


     

        

        

         

    )
}
