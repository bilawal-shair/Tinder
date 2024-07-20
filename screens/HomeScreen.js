import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    
    const navigation = useNavigation();

  return (
    <View>
         <Text>I am HOme Screen</Text>
         <Button title = "Go to Chat screen" onPress={()=> navigation.navigate("Chat")}/>
    </View>)
}

export default HomeScreen