import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'

export default function Schedule({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.heading1}>Gym </Text>
        <Text style={styles.heading2}>Point</Text>
      </View>
      <Text style={styles.heading}>We create your training schedule</Text>
      {/* <Image source={require('../assets/Grah.png')}/> */}
      <ProgressCircle
            percent={78}
            radius={110}
            borderWidth={15}
            color="#F54242"
            shadowColor="#fff"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 22, fontWeight:'bold', color:'black' }}>{'78%'}</Text>
        </ProgressCircle>
     <View style={styles.text}>
     <Text style={{textAlign:'center', fontSize:17}}>
      We create a workout according to demographic profile, activity level and interests
      </Text>
     </View>
      <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('SubPlan')}>
        <Text style={styles.btnText}>Start Training</Text>
      </TouchableOpacity>
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
      text:{
        width:200,
        flex:1,
        alignItems:'center',
        // justifyContent:'space-evenly',
        marginTop: 40
      },
      btn: {
        width:300,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        // marginBottom:30
        // marginTop: 20,
        position: 'absolute',
      bottom:50,
      },
      btnText: {
        color: 'white',
        fontSize: 22,
      },
})