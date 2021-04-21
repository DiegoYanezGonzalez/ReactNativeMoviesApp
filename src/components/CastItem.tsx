import { createNavigatorFactory } from '@react-navigation/core'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'
import { Cast } from '../interface/creditsInterface'

interface Props {
    actor:Cast
}

export const CastItem = ({actor}:Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    
    return (
        <View style={styles.container}>

          {
              actor.profile_path && (
                <Image
                source={{uri}}
                style={{width:50,height:50, borderRadius:10}}
             />
              )
          }

            
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18,fontWeight:"bold",marginHorizontal:10}}>
                {actor.name}
                </Text>
                <Text style={{fontSize:16,opacity:0.5, fontWeight:"bold",marginHorizontal:10}}>
                {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:'white',
        borderRadius:10,
        height:50,
        shadowColor:"#000",
        shadowOffset:{
          width:0,
          height:2,      
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:10,
        marginHorizontal:10,
        paddingRight:15
    },
    actorInfo:{
        marginLeft:10,
        marginTop:3
    }
});
