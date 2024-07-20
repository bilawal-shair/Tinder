import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{

    navigation.setOptions({

      headerShown:false,

    })

  }, [])
  return (

    <View  style = {tw`flex-1`}>
      <ImageBackground
       resizeMode = "cover"
       style = {tw`flex-1`}
      

       source = {{uri: "https://tinder.com/static/tinder.png"}}
      >

        <TouchableOpacity
         style = {{ 
          backgroundColor: 'white',
          padding: 10,
         borderRadius: 30,
         marginTop:600,
         width:250,
         height:50,
         marginLeft: 50
         }}>

        <Text style = {{alignSelf: "center"}}>SignIn & get swiping</Text>
        </TouchableOpacity>
        
      </ImageBackground>

     
    </View>
  )
}

export default LoginScreen