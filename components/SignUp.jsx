import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import CheckBox from 'react-native-check-box'

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput style={styles.textInput} placeholder="Enter Email"></TextInput>

      <TextInput
        style={styles.textInput1}
        placeholder="Enter Password"></TextInput>
      <TextInput
        style={styles.textInput2}
        placeholder="Confirm Password"></TextInput>
      <View style={styles.privacy}>
        {/* <CheckBox
        title='Click'
        // checked={this.state.checked}
        checkedIcon='dot-circle-o'

        /> */}
        <Icon name='radio-button-unchecked' size={30} color='black' />
        <Text>By continuing you accept our Privacy Policy</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    marginLeft: 90,
  },
  heading: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30,
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
    marginTop: 9,
    backgroundColor: 'white',
  },
  textInput2: {
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 9,
    backgroundColor: 'white',
  },
  privacy:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:-20
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  },
  signInWith: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 48,
    color: 'black',
  },
  footerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
});
