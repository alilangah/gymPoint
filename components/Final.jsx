import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import CIcon from 'react-native-vector-icons/FontAwesome'

export default function Final({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.heading1}>Gym </Text>
        <Text style={styles.heading2}>Point</Text>
      </View>
      <Image style={styles.image} source={require('../assets/logo.png')} />
      <View>
        <Text style={styles.heading}>Wohoo!!! Payment successful.</Text>
        <Text>Thanks for choosing GymPoint</Text>
      </View>
      <View style={styles.points}>
        <View style={{flexDirection:'row'}}>
        <Icon name='dot-single' size={30}/>
        <Text>GymPoint will call you regarding your starting date & timing.</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name='dot-single' size={30}/>
        <Text>It is requsted to strictly follow our trainers routine & reach on time.</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name='dot-single' size={30}/>
        <Text>For any queries feel free to contact our Customer care.</Text>
        </View>
      </View>
      <View style={styles.contactView}>
        <CIcon name='headphones' size={25}/>
        <Text>Customer care : 1500 7373 4666 {'\n'} (8.00AM-10.00PM)</Text>
      </View>
      <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop:50
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
  image:{
    margin:30
  },
  heading:{
    fontWeight:'bold',
        color:'black',
        fontSize:27,
        textAlign:'center'
  },
  points:{
    width:320,
    borderRadius:12,
    backgroundColor:'white',
    padding:20,
    marginTop:90,
  },
  contactView:{
    flexDirection:'row',
    margin:20
  },
  btn: {
    width:300,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    // marginBottom:50
    // marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  },
});
