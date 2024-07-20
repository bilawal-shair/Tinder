import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

function App() {

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
  

            <Stack.Screen name="Login" component={LoginScreen} />
  
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />

    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


