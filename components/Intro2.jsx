import React from 'react'
import { View, ImageBackground, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import background from '../assets/intro2.png';
import Icon from 'react-native-vector-icons/AntDesign';



export default function Intro2({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={background} resizeMode='cover' style={styles.backgroundImage}>
     <View style={styles.contant}>
     <Text style={styles.text}>
     HEALTHY ENIVORMENT
     </Text>
     <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Intro3')}>
            <Icon name="arrowright" size={30} color="black" />
          </TouchableOpacity>
      {/* <Button
      title='Get Started '
      onPress={()=> navigation.navigate('Intro3' 
      // {
      //   itemId: 86,
      //   otherParam: 'anything you want here',
      // }
      )}
      /> */}
       {/* <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Intro3', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      {/* <Button title="Get Started" onPress={() => navigation.navigate('Intro3')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
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
