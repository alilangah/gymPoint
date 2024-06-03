import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function MyFlatList() {
    const [data, setData]=useState([
        {
            Name:'Bi-ceps',
            image:require('../assets/BiCeps.png'),
        },
        {
            Name:'Abs',
            image:require('../assets/Abs.png'),
        },
        {
            Name:'Exercise',
            image:require('../assets/Exercise.png'),
        },
        {
            Name:'Power Training',
            image:require('../assets/PowerTraining.png'),
        },
        {
            Name:'Yoga',
            image:require('../assets/Yoga.png'),
        },
        {
            Name:'Weight Loss',
            image:require('../assets/WeightLoss.png'),
        },
        {
            Name:'Custom',
            image:require('../assets/Custom.png'),
        },
    ]);
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
        <Text style={styles.heading1}>Gym </Text>
        <Text style={styles.heading2}>Point</Text>
      </View>
      <Text style={styles.heading}>Choose Your GOAL</Text>
      <FlatList
      data={data}
      renderItem={(e)=>{
        return(
                <View style={{flexDirection:'row'}}>
                    <Text>{e.item.Name}</Text>
                    <Image style={styles.imageStyle} source={e.item.image}/>
                </View>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
    container1: {
        flexDirection: 'row',
        marginTop: 20,
      },
      heading1: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'black',
      },
      heading2: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'red',
      },
      heading:{
        margin:20,
        fontWeight:'bold',
        color:'black',
        fontSize:31,
        textAlign:'center',
        marginBottom:50
        // width:200
      },
    imageStyle:{
        width:100,
        height:100,
        borderRadius:10
    }
})