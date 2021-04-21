import React from 'react';
import { View , Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interface/creditsInterface';
import { MovieFull } from '../interface/movieInterface';

interface Props{
   movieFull:MovieFull;
   cast:Cast[];
}

export const MovieDetails = ({ movieFull,cast }:Props ) => {
    return (
        <>
        {/* Details */}
            <View style={{marginHorizontal:10}}>
             <View style={{flexDirection:'row'}}>
             <Icon
               name="star-outline"
               color='grey'
               size={16}
             />
             <Text>  {movieFull.vote_average} </Text>
             <Text style={{marginLeft:10}}>
                 -   {movieFull.genres.map(g=>g.name).join(', ') }
             </Text>
             </View>
            </View>
         
         {/* Casting */}

        </>
    )
}
