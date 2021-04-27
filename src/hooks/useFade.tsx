import React from 'react'
import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {
    //when the FadeScreen is created the opacity is created
const opacity = useRef(new Animated.Value(0.5)).current;

//color appears
const fadeIn = () => {
    Animated.timing(
        opacity,
        {    
            toValue:1,// makes the object visible
            duration:2000, 
            useNativeDriver:true        
        }
    ).start();
}


//color disappears
const fadeOut = () =>{
    Animated.timing(
        opacity,
        {    
            toValue:0,// makes the object invisible
            duration:2000, 
            useNativeDriver:true        
        }
    ).start();
  }

  return{
      opacity,
      fadeIn,
      fadeOut
  }

}
