import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Movie } from '../interface/movieInterface'
import { MoviePoster } from './MoviePoster'


interface Props{
    title ?: string;
    movies: Movie[]
}

export const HorizontalSlider = ({title,movies}:Props) => {
    
    return (
    
    <View style={{
        height: (title) ? 260 : 220 
        }} >

    {
        title &&  <Text style={{fontSize:30, fontWeight:'bold',
        marginLeft:10,  }} >{title}</Text>
    }
     <View style={{marginTop:5}}>
     <FlatList
        data={movies}
        renderItem={ ( {item }: any ) =>(
           <MoviePoster movie={item} width={140}height={180} />
           )}
        keyExtractor={(item) => item.id.toString() }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
     />
     </View>
     
   </View>
    
    )

    
}
