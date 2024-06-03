import React from 'react'
import { View, ImageBackground, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import background from '../assets/intro3.png';
import Icon from 'react-native-vector-icons/AntDesign';



export default function Intro3({route, navigation}) {
  // const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
    <ImageBackground  resizeMode='cover' source={background} style={styles.backgroundImage}>
     <View style={styles.contant}>
     {/* <Text>Details Screen</Text> */}
      {/* <Text>itemId: {itemId} </Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
     <Text style={styles.text}>
     ADVANCE EQUIPMENTS
     </Text>
      {/* <Button
      title='Get Started '
      onPress={()=> navigation.navigate('SignIn')}
      /> */}
      <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SignIn')}>
            <Icon name="arrowright" size={30} color="black" />
          </TouchableOpacity>
     </View>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  contant:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 170,
  },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth:4,
        borderRadius: 44,
        borderColor: 'white',
        padding: 15,
    },
    btn: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 35,
      alignItems: 'center',
      position: 'absolute',
      bottom: 50,
      // left:0,
    },
    
  });
