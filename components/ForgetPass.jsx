import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ForgetPass({navigation}) {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.headingText}>Forget Your Password?</Text>
        <TextInput
          placeholder="Type Your Email"
          style={styles.textInput}></TextInput>
      </View>
      <View style={styles.footerBtn}>
        <TouchableOpacity
          style={styles.touchAble}
          onPress={() => navigation.navigate('ResetPass')}>
          <Text style={styles.btnText}>SEND</Text>
          <Icon name='send-circle-outline' size={30} color="black"  />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //     // alignItems: 'center',
  //     // justifyContent: 'center',
  //     // marginTop:50
  //   },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  headingText: {
    // width: 150,
    fontSize: 35,
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
    marginTop: 70,
    backgroundColor: 'lightgray',
  },
  footerBtn: {
    // flex: 1,
    marginTop: '70%',
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  touchAble: {
    flexDirection:'row',
    width: 110,
    backgroundColor: 'lightgreen',
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
