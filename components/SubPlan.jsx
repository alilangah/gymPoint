import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import bg1 from '../assets/swipe2.png'

export default function SubPlan({navigation}) {
  return (
    <View style={styles.container}>
         <View style={styles.container1}>
        <Text style={styles.heading1}>Gym </Text>
        <Text style={styles.heading2}>Point</Text>
      </View>
      <Text style={styles.heading}>Select your subscription</Text>
      <ScrollView horizontal={true}>
        {/* <ImageBackground 
        source={bg1}
        resizeMode="cover"
        style={{width:200, height:200}}
        >
          <Text>Flexible{'\n'}Schedule</Text>
        </ImageBackground> */}
        <View style={styles.swipeView}>
          <View style={{flex:1, alignItems:'flex-end' , justifyContent:'flex-start', padding:20}}>
          <Text style={{fontSize:18, color:'black'}}>Flexible{'\n'}Schedule</Text>
          </View>
          <View style={{flex:1, alignItems:'flex-start' , justifyContent:'flex-end'}}>
          <Image source={require('../assets/swipe1.png')} resizeMode='cover'/>
          </View>
        </View>
          
        {/* <ImageBackground 
        source={bg1}
        resizeMode='stretch'
       
        >
          <Text>Flexible{'\n'}Schedule</Text> 
        </ImageBackground> */}
        
        <View style={styles.swipeView}>
        <Text>Special{'\n'}Guide</Text>
          <Image style={{ width:200, height:200,}} source={require('../assets/swipe2.png')}/>
        </View>
        {/* <View style={styles.swipeView}>
        <Text>Perfect{'\n'}Body</Text>
          <Image style={{ width:150, height:200}} resizeMode='cover' source={require('../assets/swipe3.png')}/>
        </View> */}
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', width:200, height:200, backgroundColor:'#FFE860'}}>
    <Image
     style={{
      //  flex: 1,
       width:200,
       height:230,
       borderTopLeftRadius:30
     }}
     source={require('../assets/swipe3.png')}
     />
     <Text style={{position: 'absolute', fontSize: 20, color:'black'}}>Perfect{'\n'}Body</Text>
 </View>
        <View style={styles.swipeView}>
        <Text>Diet{'\n'}Plan</Text>
          <Image source={require('../assets/swipe4.png')}/>
        </View>
        <View style={styles.swipeView}>
        <Text>Free{'\n'}Supplies</Text>
          <Image source={require('../assets/swipe5.png')}/>
        </View>
      </ScrollView>
      <View style={styles.selectView}>
      <View>
        <View style={styles.selectPlan}>
          <TouchableOpacity>
          <Icon name='checkcircleo' size={30} color='green'/>
          </TouchableOpacity>
            <View>
            <Text style={styles.selectPlanHeading}>$119.99/Year</Text>
            <Text>$9,99/Month billed annually</Text>
            </View>
        </View>
      </View>
      <View>
        <View style={styles.selectPlan1}>
        <TouchableOpacity>
          <Icon1 name='radio-button-unchecked' size={30} color='green'/>
          </TouchableOpacity>
            <View>
            <Text style={styles.selectPlanHeading}>7 DAY FREE TRIAL</Text>
            <Text>$14.99/Month after 1 week</Text>
            </View>
        </View>
      </View>
      </View>
      <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Final')}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
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
        fontSize:20,
        // width:200
      },
      swipeView:{
        width:200, 
        height:200, 
        backgroundColor:'#66D6D7',
        margin:10,
        borderRadius:10
      },
      bgSwipeView:{
        width:200, 
        height:200, 
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        margin:10,
        borderRadius:20
      },
      selectView:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
      },
      selectPlan:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:280,
        borderWidth:2,
        borderColor:'green',
        borderRadius:4,
        margin:8,
        padding:12,
        backgroundColor:'white'
      },
      selectPlan1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:280,
        // borderWidth:0,
        // borderColor:'green',
        borderRadius:4,
        margin:8,
        padding:12,
        backgroundColor:'white'
      },
      selectPlanHeading:{
        fontWeight:'bold',
        color:'black'
      },
      btn: {
        width:300,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        // marginBottom:30,
        // marginTop: 20,
        position: 'absolute',
        bottom:50,
      },
      btnText: {
        color: 'white',
        fontSize: 22,
      },
      
})