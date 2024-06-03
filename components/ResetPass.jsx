import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'


export default function ResetPass({navigation}) {
  return (
    // <View style={styles.container}>
    //           <Image source={require('../assets/logo.png')} />
    //   <Text style={styles.headingText}>Reset Your Password?</Text>
    // </View>
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.headingText}>Reset Your Password?</Text>
        <TextInput
          placeholder="New Password"
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Confirm New Password"
          style={styles.textInput1}></TextInput>
      </View>
      <View style={styles.footerBtn}>
        <TouchableOpacity
          style={styles.touchAble}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnText}>DONE</Text>
          <Icon name='checkmark-done-circle-outline' size={30} color="black"  />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  headingText: {
    // width: 150,
    fontSize: 37,
    marginTop: 20,
    color: 'black',
  },
  textInput: {
    width: 300,
    borderColor: 'red',
    borderRadius: 8,
    // borderWidth: 2,
    padding: 10,
    fontSize: 18,
    marginTop: 50,
    backgroundColor: 'lightgray',
  },
  textInput1: {
    width: 300,
    borderColor: 'red',
    borderRadius: 8,
    // borderWidth: 2,
    padding: 10,
    fontSize: 18,
    marginTop: 7,
    backgroundColor: 'lightgray',
  },
  footerBtn: {
    // flex: 1,
    marginTop: '60%',
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  touchAble: {
     flexDirection:'row',
    width: 110,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  btnText: {
    fontWeight: 'bold',
    color:'black'
  },
});
