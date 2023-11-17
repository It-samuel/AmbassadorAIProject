import { Text, StyleSheet, View, SafeAreaView, Image, TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Appwrite } from 'appwrite';
import { colors } from '../Components/styles'

export default function LoginScrn({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await appwrite.account.createSession(email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
        
        <SafeAreaView style={styles.container}>
          <View >
          <Image
          source={require('../assets/images/doc2.png')}
          style={{width:340, height:260, marginTop:26, alignSelf:'center'}}
          resizeMode='contain'
          />

          <Text style={styles.logIn}>Log In</Text>

          <View style={{    alignItems:'center', justifyContent:'center',}}>
          <TextInput 
          placeholder="Enter your Email"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <TextInput 
          placeholder="Password"
          style={styles.textInput}
          keyboardType='default'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
            value={password}
          
          />
          </View>
          
          </View>
          
          <View style={{bottom:0, marginTop:90}}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
          <Text style={{color:colors.white, fontSize:20,fontWeight:600}} onPress={() => navigation.navigate('BottomTabs')} >Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Register} activeOpacity={0.5}
          onPress={() => navigation.push('SignUpScrn')}>
          <View style={styles.regText}>
          <Text >Don’t have an account? </Text>
          <Text style={{color:colors.lightBlue}}>Sign Up</Text>
          </View>
          </TouchableOpacity>
          </View>
          
        </SafeAreaView>
        
      
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1,  
     
  },
  textInput:{
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    width:272,
    height:42,
    marginBottom:15,
    padding:7
    
  },
  logIn:{
    fontSize:32,
    fontWeight:'700',
    alignSelf:'center',
    justifyContent:'center',
    marginVertical:15
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
    position:'relative',
    bottom:0,
    
    
  },
  Register:{
    position:'relative',
    bottom:0,
    fontSize:20,
    fontWeight:'700',
    color:colors.black,
    
    alignSelf:'center',
    justifyContent:'center',
  },
  regText:{
    flexDirection:'row',
    marginTop:10
  }
})