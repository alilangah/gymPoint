import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text,
  TextInput,
  Alert,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import background from '../assets/lg.png';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Start({navigation}) {
  //   const [name, setName] = useState('');

  //   const handleClick=()=>{
  // if(name==='ali'){
  //   console.log(name)
  //   navigation.navigate('Intro1')

  // }else{
  //   console.log('invalid')
  //   ToastAndroid.show('Access denied ', ToastAndroid.SHORT);
  //   // Alert.alert(
  //   //   'Alert Title',
  //   //   'My Alert Msg',
  //   //   [
  //   //     {
  //   //       text: 'Cancel',
  //   //       onPress: () => Alert.alert('Cancel Pressed'),
  //   //       style: 'cancel',
  //   //     },
  //   //   ],
  //   //   {
  //   //     cancelable: true,
  //   //     onDismiss: () =>
  //   //       Alert.alert(
  //   //         'This alert was dismissed by tapping outside of the alert dialog.',
  //   //       ),
  //   //   },
  //   // );
  // }

  //   };
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.backgroundImage}>
        <View style={styles.contant}>
          {/* <Text> {name} </Text> */}
          <Image style={styles.image} source={require('../assets/logo.png')} />
          {/* <TextInput
            // value={name}
            // onChangeText={setName}
            placeholder="username"></TextInput> */}
          {/* <Button
        title='Get Started '
        onPress={() => navigation.navigate('Intro1')}
        // onPress={handleClick}
        /> */}
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Intro1')}>
            <Text style={styles.btnText}>Get Started</Text>
            <Icon name="arrowright" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contant: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:20
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image:{
    width: 190, 
    height:165
  },
  btn: {
    justifyContent:'space-around',
    flexDirection:'row',
    width:220,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    opacity:0.7,
    // marginBottom:30
    // marginTop: 20,
    position: 'absolute',
      bottom:50,
  },
  btnText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 22,
  },
});
