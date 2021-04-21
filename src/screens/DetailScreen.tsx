import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../interface/movieInterface';
import { RootStackParams } from '../navigation/Navigation';


const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,"DetailScreen">{
     
};
export const DetailScreen = ({route}:Props) => {

     const movie=route.params;
     const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
    <ScrollView>


        <View style={styles.imageContainer} >  
         <Image
         source={{uri}}
         style={styles.posterImage}
         />
        </View>

        <View style={styles.marginContainer}>
        <Text style={styles.subTitle}> {movie.original_title} </Text>
         <Text style={styles.title}> {movie.title} </Text>
        </View>
    </ScrollView>


    )
}

const styles = StyleSheet.create({
    imageContainer:{
        overflow:'hidden',
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
    posterImage:{
        flex:1
        
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:15
    },
    subTitle:{
        fontSize:16,
        opacity:0.5
    },
    title:{
       fontSize:20,
       fontWeight:'bold'
    }
    
})
