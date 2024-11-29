import { Text, StyleSheet, View,SafeAreaView,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react';
import { Appwrite } from 'appwrite';
import { colors } from '../Components/styles'
import { Client, Account, ID } from "appwrite";


export default function SignUpScrn ({navigation}) { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName,setFirstName] = useState('');
  const [LastName, setLastName] = useState('');

  
  

  const handleSignUp = async () => {
    try {
      const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('65359beb0e248bfe36be'); // Your project ID

      const account = new Account(client);

      const response = await account.create(
        '', // Automatically generated user ID
        email,
        password,
        FirstName,
        LastName
      );

      console.log('SignUp Success:', response);

      // You can add navigation logic here to navigate to the next screen on successful signup
      navigation.navigate('NextScreen');
    } catch (error) {
      console.error('SignUp Error:', error);
    } 
  };
  
  
    // const handleSignUp = async () => {
    //   try {
    //     const response = await appwrite.account.create(email, password, FirstName, LastName);
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
          source={require('../assets/images/doc3.png')}
          style={{width:340, height:225, marginTop:26, alignSelf:'center'}}
          resizeMode='contain'
          />
          <Text style={styles.text1}> Sign Up</Text>
          <View style={{    alignItems:'center', justifyContent:'center', marginTop:15}}>
          <TextInput 
          placeholder="First Name"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(text) => setFirstName(text)}
            value={FirstName}
          />

          <TextInput 
          placeholder="Last Name"
          style={styles.textInput}
          keyboardType='default'
          onChangeText={(text) => setLastName(text)}
            value={LastName}
          
          />
          <TextInput 
          placeholder="Enter your Email"
          style={styles.textInput}
          keyboardType='default'
          onChangeText={(text) => setEmail(text)}
            value={email}
          
          />
          <TextInput 
          placeholder=" Password"
          style={styles.textInput}
          keyboardType='default'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
            value={password}
          
          />
          </View>
          
          
          
          <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={handleSignUp}>
          <Text style={{color:colors.white, fontSize:20,fontWeight:600}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Register} activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScrn')}>
          <View style={styles.regText}>
          <Text >Already have an account? </Text>
          <Text style={{color:colors.lightBlue}}>Log in</Text>
          </View>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text1:{
    fontSize:25,
    fontWeight:'700',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10
    
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
  btn:{
    backgroundColor:colors.primary,
    borderRadius:10,
    height:46,
    width:300,
    marginTop:65,
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
    marginTop:10,
    alignSelf:'center',
    justifyContent:'center',
  },
  regText:{
    flexDirection:'row'
  }
})