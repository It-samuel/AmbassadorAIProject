import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function HomeScreen({navigation}) {
  const MyWebComponent = () => {
    
    const url = 'https://healthcare-bot-dqyjqtxwbmiys.azurewebsites.net/';

    // Open the web link using the Linking module
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.img1}>
      <Image
          source={require('../assets/images/img6.png')}
          style={{width:70, height:70, }}
          resizeMode='contain'
          />
      </View>
      <View style={{marginLeft:40}}>
        <Text style={{fontSize:20, fontWeight:'400'}}>Good Morning</Text>
        <Text style={{fontSize:30}}>Mr. Paul</Text>
      </View>
      <View style={{flexDirection:'row',width:200,}}>
      <Image
          source={require('../assets/images/doc4.png')}
          style={{width:150, height:120, marginRight:-40 }}
          resizeMode='contain'
          />
          <View style={{borderWidth:1, height:80, borderRadius:20, padding:10, borderBottomLeftRadius:0}}>
          <Text >Hello, I’m Pulse, your medical AI assistant, how are you feeling today?</Text>
          </View>
      </View>
      <View style={styles.prompt}>
        <Text>I have a dry cough with blocked nose</Text>
      </View>
      <View style={styles.prompt1}>
        <Text>
        Based on the symptoms you've described (dry cough and blocked nose), 
        it could be related to a common cold or allergies. 
        Here are some<Text style={{color:'#5845EDAD'}}> doctors</Text> that can help you out.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={MyWebComponent}>
        <Text> Type here...</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#95d2ff'
    },
    img1:{
      marginTop:40,
      alignItems:'flex-end',
      marginRight:20
    },
    prompt:{
      backgroundColor:"#5845EDAD",
      height:60,
      width:220,
      borderRadius:20,
      padding:10,
      alignSelf:'flex-end',
      marginRight:15,
      borderBottomRightRadius:0
    },
    prompt1:{
      width:230,
      marginTop:15,
      borderWidth:1,
      padding:10,
      marginLeft:8,
      borderRadius:10
    },
    btn:{
      backgroundColor:'#5845EDAD',
      height:45,
      marginHorizontal:45,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginTop:70
    }
})