import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../Components/styles';




export default function SplashScreen  ({navigation}) {
  setTimeout(() =>{
    navigation.navigate('OnboardingScrn')
}, 4000)
  return (
    <View style={styles.container}> 
      <Image
  style={{
    width: 340,
    height: 348,
    resizeMode: 'contain',
  }}
  source={
    require('../assets/images/logo.png')}
/>
    </View>
    // include at least width and height
  )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white
    }
})