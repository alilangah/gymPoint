import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  StyleSheet,
  Linking,
} from 'react-native';
import React, {useState} from 'react';

export default function SignIn({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (name === 'ali' && password === '1234') {
      console.log(name);
      console.log(password);
      navigation.navigate('Detail');
    } else {
      console.log('invalid');
      ToastAndroid.show('Access denied ', ToastAndroid.SHORT);
      // Alert.alert(
      //   'Alert Title',
      //   'My Alert Msg',
      //   [
      //     {
      //       text: 'Cancel',
      //       onPress: () => Alert.alert('Cancel Pressed'),
      //       style: 'cancel',
      //     },
      //   ],
      //   {
      //     cancelable: true,
      //     onDismiss: () =>
      //       Alert.alert(
      //         'This alert was dismissed by tapping outside of the alert dialog.',
      //       ),
      //   },
      // );
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <Text style={styles.heading}>Sign In</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Enter Email"></TextInput>

      <TextInput
        style={styles.textInput1}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"></TextInput>
      <TouchableOpacity
        style={styles.touchAble}
        //  onPress={()=> navigation.navigate('SignUp')}
        onPress={handleClick}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.forgetText}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
          <Text>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signInWith}>Sign In With</Text>
      <View style={styles.footerImage}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image source={require('../assets/fbLogo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.apple.com/')}>
          <Image source={require('../assets/appleLogo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://support.google.com/accounts/answer/27441?hl=en',
            )
          }>
          <Image source={require('../assets/googleLogo.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.footerText}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerSignUp}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    marginLeft: 90,
  },
  heading: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 20,
    backgroundColor: 'white',
  },
  textInput1: {
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 15,
    backgroundColor: 'white',
  },
  touchAble: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    borderRadius: 9,
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  },
  forgetText: {
    margin: 20,
    alignItems: 'center',
  },
  signInWith: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
    color: 'black',
  },
  footerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  footerText: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
      bottom: 50,
      // left:58
  },
  footerSignUp: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
