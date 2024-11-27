import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, Linking, Modal } from 'react-native'
import React, {useState} from 'react'
import { WebView } from 'react-native-webview';


const url = 'healthcare-bot-wssuuaxcz4ai4.azurewebsites.net';
export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  
  const MyWebComponent = () => {
    

    // Open the web link using the Linking module
    Linking.openURL(url).then
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
      
      <TouchableOpacity style={styles.btn} onPress={openModal} >
      
        <Text> Type here...</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        
        <TouchableOpacity onPress={closeModal}>
        <View style={{padding:10, flexDirection:'row'}}>
        <Image
          source={require('../assets/images/arrow.png')}
          style={{width:20, height:20, }}
          resizeMode='contain'
          />
          <Text style={{marginLeft:5}}>Back</Text>
        </View>
        </TouchableOpacity>

          {/* Content inside WebView */}
          <WebView source={{ uri: url}} />
        
      </Modal>
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