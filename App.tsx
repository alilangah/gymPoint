/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Start from './components/Start';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgetPass from './components/ForgetPass';
import ResetPass from './components/ResetPass';
import Detail from './components/Detail';
import Goal from './components/Goal';
import Schedule from './components/Schedule';
import SubPlan from './components/SubPlan';
import Final from './components/Final';
import MyFlatList from './components/MyFlatList';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Intro1" component={Intro1} />
          <Stack.Screen name="Intro2" component={Intro2} />
          <Stack.Screen name="Intro3" component={Intro3} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPass" component={ForgetPass} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Goal" component={Goal} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="SubPlan" component={SubPlan} />
          <Stack.Screen name="Final" component={Final} />
          {/* <Stack.Screen name="MyFlatList" component={MyFlatList} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
