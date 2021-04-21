import React from 'react';
import { View , Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interface/creditsInterface';
import { MovieFull } from '../interface/movieInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

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
             <Text style={{fontSize:20, marginTop:10,fontWeight:"bold"}}>
                 Historia
             </Text>
             <Text style={{fontSize:16}}
             >{movieFull.overview} </Text>

             <Text style={{fontSize:20, marginTop:10,fontWeight:"bold"}}>
                 Presupuesto 
             </Text>
             <Text style={{fontSize:18}}>
                  {currencyFormatter.format(movieFull.budget,{code:'USD'})} </Text>
            </View>
         {/* Casting */}
         <View style={{marginTop:10,marginBottom:100}}>
            <Text style={{fontSize:20, 
                marginTop:10,fontWeight:"bold",marginHorizontal:10}}>
                 Actores 
             </Text>
           <CastItem actor={cast[0]} />
         </View>
        </>
    )
}
