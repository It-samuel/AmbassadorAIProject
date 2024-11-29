import { Text, StyleSheet, View, SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileScrn() {
  
    return (
      <SafeAreaView style={styles.container}>
        <View >
          <View> 
          <Image
          source={require('../assets/images/img1.png')}
          style={{width:90, height:90, marginTop:90, alignSelf:'center'}}
          resizeMode='contain'
          />
          <Text style={styles.user}>Hi Paul!</Text>
          </View>
          <TouchableOpacity>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
          <Text style={{fontSize:20,}}>Edit Profile</Text>
          <Image
          source={require('../assets/images/pen.png')}
          style={{width:20, height:20, marginLeft:8}}
          resizeMode='contain'
          />
          
          </View>
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginTop:20}}>
          <TouchableOpacity>
            <View style={styles.details}>
            <Image
          source={require('../assets/images/personal-information.png')}
          style={{width:30, height:30, marginBottom:10}}
          resizeMode='contain'
          />
          <Text>My Medical</Text>
          <Text>details</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.details}>
            <Image
          source={require('../assets/images/calendar.png')}
          style={{width:30, height:30, marginBottom:10}}
          resizeMode='contain'
          />
          <Text>Upcoming</Text>
          <Text>Appointments</Text>
            </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.pad}>
          <Image
          source={require('../assets/images/unlock.png')}
          style={{width:30, height:30, }}
          resizeMode='contain'
          />
          <Text style={{fontSize:18, marginLeft:15}}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pad}>
          <Image
          source={require('../assets/images/bin.png')}
          style={{width:30, height:30, }}
          resizeMode='contain'
          />
          <Text style={{fontSize:18, marginLeft:15}}>Delete Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pad}>
          <Image
          source={require('../assets/images/log-out.png')}
          style={{width:30, height:30, }}
          resizeMode='contain'
          />
          <Text style={{fontSize:18, marginLeft:15}}>Log Out</Text>
          </TouchableOpacity>
          
      </View>
      </SafeAreaView>
    )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#95d2ff',
    flex:1
  },
  user:{
    fontSize:30, 
    fontWeight:'700',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10
  },
  details:{
    alignItems:'center', 
    justifyContent:'center', 
    height:130, 
    width:140,
    borderWidth:1,
    borderRadius:10
  },
  pad:{
    borderWidth:1,
    borderRadius:5,
    marginHorizontal:25,
    marginTop:30,
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    
  }
  
})