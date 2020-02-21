import React from 'react'
import {View,Text,Button, ImageBackground, StyleSheet} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import {Actions} from 'react-native-router-flux'

export default class SigUp extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            signUpEmail:'',
            newPassword:'',
            confirmPassword:'',
            nameError:null,
            signUpEmailError:null,
            newPasswordError:null,
            confirmPasswordError:null,


        }
    }
    handleOnSignUp=()=>{
        if((this.state.name=="") ||(this.state.signUpEmail=="") || (this.state.newPasssword=="") || (this.state.confirmPassword=="") ){
           {
            if((this.state.name==""))
            {
            this.setState({nameError:true})
            }else{
                this.setState({nameError:false})
            }
             if((this.state.signUpEmail==""))
            {
                this.setState({signUpEmailError:true})
            }
            else{
                this.setState({signUpEmailError:false})
            }
             if((this.state.newPassword==""))
            {
                this.setState({newPasswordError:true})
            }
            else{
                this.setState({newPasswordError:false})
            }
             if((this.state.confirmPassword==""))
            {
                this.setState({confirmPasswordError:true})
            }
            else{
                this.setState({confirmPasswordError:false})
            }
        }

        }else{
            this.setState({nameError:false,signUpEmail:false,newPasswordError:false,confirmPasswordError:false})
            // if(this.setState({nameError:true}))
            // {
            //     this.setState({nameError:false})
            
            // }
            // else if(this.setState({signUpEmailError:true}))
            // {
            //     this.setState({signUpEmailError:false})
            // }
            // else if( this.setState({newPasswordError:true}))
            // {
            //     this.setState({newPasswordError:false})
            // }
            // else if( this.setState({confirmPasswordError:true}))
            // {
            //     this.setState({confirmPasswordError:false})
            // }
        }
    }
    checkInputState =(inputType)=>
    {
      
        // if(inputType === 'email'){
        //     if(this.state.emailError == true){
        //         return {borderColor:'red',color:'red'}
        //     }else{
        //         return null;
        //     }
            if((inputType==='yourName')) //|| ||||)
            {
             if((this.state.nameError==true))
             {
                return {borderColor:'red',color:'red'}
           
             }else
             {
                return null
             }
            }
            if((inputType==='yourEmail'))
            {
              if((this.state.signUpEmailError==true))
             {
                return {borderColor:'red',color:'red'}
             }
             else
             {
                return null
             }
            }
            if((inputType==='newPassword'))
            {
              if((this.state.newPasswordError==true))
             {
                return {borderColor:'red',color:'red'}
             }
             else
             {
                return null
             }
            }
            if((inputType==='conPassword'))
            {
              if((this.state.confirmPasswordError==true))
             {
                return {borderColor:'red',color:'red'}
             }
             else
             {
                return null
             }
            }
     }
 
        
        
    
    render()
    {
    return(
        <ImageBackground style={{backgroundColor:'#103726',flex:1,}} source={{uri:'https://images.pexels.com/photos/1265952/pexels-photo-1265952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}>
        <View style={{flex:1,backgroundColor:'#234a2561',padding:10}}>
          {/* firsrt row */}
         <View style={{padding:40 }}>
      <Text style={{fontSize:40,color:'white',textAlign:'center'}}>
          Register
       </Text>
      <Text style={{fontSize:12,color:'white',textAlign:'center'}}>
           Create your Account
      </Text>


         </View>
         
         {/* Second Row */}
         <View style={{padding:10 }} >
                  <TextInput value={this.state.name} onChangeText={(yourName)=>{this.setState({name:yourName})}} textContentType={"username"} placeholderTextColor={"white"} placeholder={"Your name"} style={[styles.inputStyle,this.checkInputState('yourName')]}/>
                  <TextInput value={this.state.signUpEmail} onChangeText={(femail)=>{this.setState({signUpEmail:femail})}}  textContentType={"emailAddress"} placeholderTextColor={"white"} placeholder={"Your email"} style={[styles.inputStyle,this.checkInputState('yourEmail')]}/>
                  <TextInput value={this.state.newPassword}  onChangeText={(nPassword)=>{this.setState({newPassword:nPassword})}}  textContentType={"password"} secureTextEntry  placeholderTextColor={"white"} placeholder={"New password"} style={[styles.inputStyle,this.checkInputState('newPassword')]}/>

                  <TextInput value={this.state.confirmPassword} onChangeText={(cPassword)=>{this.setState({confirmPassword:cPassword})}}  textContentType={"password"} secureTextEntry placeholderTextColor={"white"} placeholder={"Confirm password"}style={[styles.inputStyle,this.checkInputState('conPassword')]}/>

         </View>
         {/* 3 Row */}
         <View style={{padding:10}}>
         <TouchableOpacity  onPress={this.handleOnSignUp} style={{margin:10,backgroundColor:'#04C363',height:50,borderRadius:9}}>
                   <Text style={{padding:12,textAlign:'center',fontSize:17,color:'white'}}>Sign Up</Text>
               </TouchableOpacity>

         </View>

          {/* <Button/> */}
           {/* <Button/> */}
           <View style={{flexDirection:'row'}}>
               <View style={{flex:1}}>
                   <Text style={{color:'white',textAlign:'right'}}>Back to</Text>


               </View >
                 <View style={{flex:1}}>
               <TouchableOpacity onPress={()=>Actions.LoginScreen()} >
                   <Text style={{color:'#04C363',textAlign:'left',fontSize:14,paddingLeft:10}}>Sign In</Text>
               </TouchableOpacity>
                </View>
                </View>
          </View>
      </ImageBackground>
    )
    }
}
const styles=StyleSheet.create({
    inputStyle:{color:"white",padding:10,marginTop:10,marginLeft:10,marginRight:10,height:50,borderColor:'white',borderWidth:1,borderRadius:9}
    ,inputBackground:{backgroundColor:'red'}
})