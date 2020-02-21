import React from 'react'
import {View,Text,Button, ImageBackground,Image,TextInput} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Screen2(props){
    return(
        <View style={{flex:1}}>
          
        <ImageBackground style={{flex:1}} source={{uri:'https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}>
            <View style={{flex:1,backgroundColor:'#234a2561',alignItems:'center'}}>

           <View  style={{width:175,height:175}}>
           <Image
            style={{width: '100%',marginTop:20,resizeMode:"cover",height: 175,borderRadius:100,alignSelf:"center",borderWidth:1,borderColor:"white"}}
            source={require('../index.jpg')}
          />
          <View style={{justifyContent:"center",alignItems:"center",width: 50,height:50,borderRadius:50,backgroundColor: '#339966',position: 'absolute',right:0,bottom:0}}>
          <TouchableOpacity>
            <Image style={{width: 20,height:20,resizeMode:"cover"}} source={{uri:'http://www.icons101.com/icons/93/Mono_General_3_by_Custom_Icon_Design/128/camera.png'}}>
                
                </Image>
                </TouchableOpacity>  
          </View>
          <View style={{padding:10 }} >
                  <TextInput textContentType={"username"} placeholderTextColor={"white"} placeholder={"Your name"} style={{color:"white",padding:10,margin:10,height:50,borderColor:'white',borderWidth:1,borderRadius:9}}/>
            </View>
          
        </View>
        </View> 
        </ImageBackground>
        
        </View>
        
    )
    
}