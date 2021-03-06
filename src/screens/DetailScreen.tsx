import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,"DetailScreen">{
     
};
export const DetailScreen = ({route}:Props) => {

     const movie=route.params;
     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const {isLoading,cast,movieFull} = useMovieDetails(movie.id);

    
    return (
    <ScrollView>
        <View style={styles.imageContainer} > 
          <View style={styles.imageBorder}>
             <Image
              source={{uri}}
              style={styles.posterImage}
              />
          </View> 
        </View>

        <View style={styles.marginContainer}>
             <Text style={styles.subTitle}> {movie.original_title} </Text>
             <Text style={styles.title}> {movie.title} </Text>
        </View>
        <View style={styles.marginContainer}>
            {
                isLoading ? <ActivityIndicator size={30} color={"gray"} style={{marginTop:15}} />
                : <MovieDetails
                movieFull={movieFull!} cast={cast} 
                />
            }
             
        </View>
    </ScrollView>


    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:screenHeight * 0.7,
        shadowColor:"#000",
        shadowOffset:{
        width:0,
        height:2,      
      },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:10,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    imageBorder:{
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    posterImage:{
        flex:1
        
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:15
    },
    subTitle:{
        marginLeft:5,
        fontSize:16,
        opacity:0.5
    },
    title:{
        marginLeft:5,
       fontSize:20,
       fontWeight:'bold'
    }
    
})
