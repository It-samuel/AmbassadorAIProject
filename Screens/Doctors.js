import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import { dummyData } from '../Components/Data';
import {Card} from '../Components/Card';

export default function Doctors() {
  return (
    <View style={styles.container}>
      <View > 
        <FlatList 
            style={{marginTop:10, marginBottom:10}}
            horizontal ={false}
            showsHorizontalScrollIndicator ={false}
            data={dummyData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
              <View >
                <Card 
                images={item.images}
                docName={item.docName}
                fees={item.fees}
                location={item.location} 
                description={item.description}
                
                />
              </View>
            )}
        
        />
      </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})