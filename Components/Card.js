
import React from "react";
import {dummyData} from '../Components/Data';

import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";

export function Card ({
    docName,
    description,
    location,
    fees,
    images,
}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <TouchableOpacity style={styles.cardView}>
            <View style={{flexDirection:'row', padding:15, }}>
                <View >
                    <Image 
                    source={images}
                    style={{height:55,width:77,}}
                    resizeMode='contain'
                    />    
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize:20, fontWeight:'700'}} >{docName}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:-20, marginBottom:10}}>
                <View>
                    <Text>Fees</Text>
                    <Text style={{fontWeight:'bold'}}>{fees}</Text>
                </View>
                <View>
                    <Text>Location</Text>
                    <Text style={{fontWeight:'bold'}}>{location}</Text>
                </View>
            </View>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ebf3f7'
    },
    cardView:{
        width:'90%',
        marginTop:20,
        borderWidth:1,
        marginHorizontal:15,
        borderRadius:10,
        backgroundColor:'white'
    },
    info:{
        flexDirection:'column',
        width:'70%'
    },
    img:{
        height:130,
        width:130,
        padding:10,
    }
})