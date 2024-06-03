import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import background from '../assets/BiCeps.png';
import background1 from '../assets/Abs.png';
import background2 from '../assets/Exercise.png';
import background3 from '../assets/PowerTraining.png';
import background4 from '../assets/Yoga.png';
import background5 from '../assets/WeightLoss.png';
import background6 from '../assets/Custom.png';





export default function Goal({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.heading1}>Gym </Text>
        <Text style={styles.heading2}>Point</Text>
      </View>
      <Text style={styles.heading}>Choose your GOAL</Text>
      <View style={styles.imagesView}>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Bi-ceps</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background1} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Abs</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background2} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Exercise</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background3} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Power Training</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background4} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Yoga</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background5} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Weight Loss</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.image}>
          <ImageBackground source={background6} style={styles.coverImage}>
            {/* <Image source={require('../assets/BiCeps.png')}/> */}
            <View style={styles.textView}>
              <Text style={styles.imageText}>Custom</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* <Image style={styles.image} source={require('../assets/Abs.png')} />
        <Image
          style={styles.image}
          source={require('../assets/Exercise.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/PowerTraining.png')}
        />
        <Image style={styles.image} source={require('../assets/Yoga.png')} />
        <Image
          style={styles.image}
          source={require('../assets/WeightLoss.png')}
        />
        <Image style={styles.image} source={require('../assets/Custom.png')} /> */}
      </View>
      <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Schedule')}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
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
    fontSize:20
  },
  imagesView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // marginTop:30
  },
  image: {
    width: '45%',
    margin: 7,
    borderWidth: 0.5,
    borderRadius:5
  },
  coverImage: {
    width: '100%',
    height: 115,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  imageText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    width:300,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    // left:0,
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  },
});
