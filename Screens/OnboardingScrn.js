import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../Components/styles'

const OnboardingScrn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignContent:'center',marginLeft:9}}>
      <Image source={require("../assets/images/doc1.png")}
            style={{height: 300, width:340 ,marginTop:30 }}
            resizeMode="contain" />

      </View>
      <View>
        <Text style={styles.text1}>Welcome to Pulse!</Text>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.text2}>
        Your Health Companion! Describe your symptoms, 
        and let our AI magic do the trick.
        Your path to better health starts </Text>
        <Text style={styles.text2}>here!</Text>
        </View>
      
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.5}
      onPress={()=> navigation.navigate('LoginScrn')}>
        <Text style={{color:colors.white, fontSize:20,fontWeight:600}}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default OnboardingScrn

const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    text1:{
      fontSize :25,
      fontWeight:'800',
      alignSelf:'center',
      bottom:20,
      marginTop:15
    },
    text2:{
      fontSize :17,
      fontWeight:'300',
      color:"black",
      marginHorizontal:15,
      alignSelf:'center'
    },
    btn:{
      backgroundColor:colors.primary,
      borderRadius:10,
      height:46,
      width:300,
      marginHorizontal:15,
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      marginTop:35,
      position:'absolute',
      bottom:0,
      marginBottom:35
      
    }
})