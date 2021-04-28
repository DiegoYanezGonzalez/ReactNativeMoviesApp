import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props{
    children : JSX.Element | JSX.Element[]
}

export const GradientBackground = ( { children } :Props ) => {

const {colors} = useContext(GradientContext);

    return (
        <View style={{flex:1}}>
            <LinearGradient
            colors={[colors.primary,colors.secondary,'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.7,y:0.2}}
            end={{x:0.2,y:0.8}}
            />
            {children}
        </View>
    )
}
