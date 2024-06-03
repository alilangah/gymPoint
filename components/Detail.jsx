import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Wicon from 'react-native-vector-icons/FontAwesome5'


export default function Detail({navigation}) {
  const [count, setCount]= useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.heading1}>Gym </Text>
      <Text style={styles.heading2}>Point</Text>
      </View>
      <Text style={styles.heading}>Choose your Gender</Text>
      <View>
        <TouchableOpacity style={styles.genderDetail}>
        <Icon name="man" size={30} style={{color:'#19A6D2', backgroundColor:'#EDECEC', padding:7, borderRadius:5, }} />
          <Text style={styles.text}>Man</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderDetail1}>
        <Icon name="woman" size={30} style={{color:'#FF5AF8', backgroundColor:'#EDECEC', padding:7, borderRadius:5,}}  />
          <Text style={styles.text}>Woman</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Select your Age</Text>
      <View>
      <TouchableOpacity style={styles.genderDetail1}>
      <Icon name="calendar" size={30}  style={{color:'red',}} />
          <Text style={styles.text}>19</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Select your Weight</Text>
      <View>
      <TouchableOpacity style={styles.genderDetail1}>
      <Wicon name="weight" size={30}  style={{color:'red',}} />
          <Text style={styles.text}>64</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Goal')}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity>
           <Button
             onPress={() => {setCount(count + 1)}} title="Click Me"
           />
           <Button
             onPress={() => {setCount(0)}} title="Reset"
           />
           <Text>You clicked me {count} times</Text>
       </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  container1:{
    // flex:1,
    flexDirection:'row',
    marginTop:50
  },
  heading1:{
    fontSize:25,
    fontWeight:'bold',
    textDecorationLine:'underline',
    color: 'black'
  },
  heading2:{
    fontSize:25,
    fontWeight:'bold',
    textDecorationLine:'underline',
    color: 'red'
  },
  heading:{
    color:'black',
    fontSize:22,
    fontWeight:'bold',
    marginTop:30
  },
  genderDetail:{
    flexDirection: 'row',
    width:300,
    height:70,
    borderWidth: 2,
    borderRadius:8,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:6,
    padding:8
  },
  genderDetail1:{
    flexDirection: 'row',
    width:300,
    height:70,
    // borderWidth: 0.2,
    borderRadius:8,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop: 10,
    padding:8
  },
  text:{
    fontSize:20,
    color:'black',
    marginLeft:10
  },
  btn: {
    width:300,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  },


})