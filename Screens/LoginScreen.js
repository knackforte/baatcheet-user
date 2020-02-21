import React from 'react'
import {View,Text,Button, ImageBackground,Image,StyleSheet} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import {Actions} from 'react-native-router-flux'
export default class LoginScreen extends React.Component{
            constructor(props){
            super(props)
            this.state={
                email:'',
                password:'',
                emailError:null,
                passwordError:null
            }
        }
        handleOnLogin=()=>{
            if(this.state.email==""){
                this.setState({emailError:true})
                
            }else{
                this.setState({emailError:false})
                
            }
            if(this.state.password==""){
                this.setState({passwordError:true})
                
            }else{
                this.setState({passwordError:false})
                
            }
        }
        checkInputState(inputType){
            if(inputType === 'email'){
                if(this.state.emailError == true){
                    return {borderColor:'red',color:'red'}
                }else{
                    return null;
                }
            }else if(inputType === 'password'){
                if(this.state.passwordError == true){
                    return {borderColor:'red',color:'red'}
                }else{
                    return null;
                }
            }
        }
        render()
        {
     return(
        
        <ImageBackground style={{flex:1,}} source={{uri:'https://images.pexels.com/photos/1265952/pexels-photo-1265952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}>
          <View style={{flex:1,backgroundColor:'#234a2561',padding:10}}>
            {/* firsrt row */}
           <View style={{padding:40 }}>
        <Text style={{fontSize:40,color:'white',textAlign:'center'}}>
            Welcome
         </Text>
        <Text style={{fontSize:12,color:'white',textAlign:'center'}}>
             Login to your Account
        </Text>


           </View>
           {/* Second Row */}
           <View style={{padding:10 }} >
                    <TextInput value={this.state.email} onChangeText={(uemail)=>{this.setState({email:uemail})}} textContentType={"emailAddress"} placeholderTextColor={"white"} placeholder={" Enter your email"} style={[styles.inputStyle,this.checkInputState('email')]}/>
                    <TextInput value={this.state.password} onChangeText={(pass)=>{this.setState({password:pass})}} secureTextEntry placeholderTextColor={"white"} placeholder={"Password"} style={[styles.inputStyle,this.checkInputState('password')]}/>
           </View>
           {/* 3 rOW */}
           <View style={{flexDirection:'row',padding:25}}>
               <View style={{flex:1}}>
                   <Text style={{color:'white'}}>Remember</Text>


               </View>
               <View style={{flex:1}}>
               <Text style={{textAlign:'right',color:'white'}}>Forget?</Text>
               </View>
           </View>
           {/* 4 Row */}
           <View style={{paddingLeft:10,paddingRight:10,paddingTop:10}}>
               <TouchableOpacity  onPress={this.handleOnLogin} style={{margin:10,backgroundColor:'#04C363',height:50,borderRadius:9}}>
                   <Text style={{padding:12,textAlign:'center',fontSize:17,color:'white'}}>Log In</Text>
               </TouchableOpacity>
              
               <TouchableOpacity  style={{margin:10,backgroundColor:'#FFFFFF',height:50,borderRadius:9,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
               
                   
              <Image style={{width:32,height:32,borderRadius:100,}} source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/logo-google-png-15.png'}}/>
               <Text style={{color:'#04C363',alignContent:'center',fontSize:15}}>Sign in with Google</Text>
                   
               </TouchableOpacity>
              
           </View>
            {/* <Button/> */}
            <View style={{flexDirection:'row'}}>
               <View style={{flex:1,paddingLeft:17}}>
                   <Text style={{color:'white',textAlign:'right',}}>Create account?</Text>


               </View >
                 <View style={{flex:1}}>
               <TouchableOpacity onPress={()=>{Actions.SigUp()}}>
                   <Text style={{color:'#04C363',textAlign:'left',fontSize:14,paddingLeft:10}}>Sign Up</Text>
               </TouchableOpacity>
                </View>
               
           </View>
            
            </View>
        </ImageBackground>
      
    )
}
}
const styles= StyleSheet.create({
    inputStyle:{color:"white",padding:10,margin:10,height:50,borderColor:'white',borderWidth:1,borderRadius:9},
    inputBackground:{backgroundColor:'red'}
})