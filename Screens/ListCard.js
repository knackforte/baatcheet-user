import React from 'react'
import { View,Text, TextInput,Image, TouchableOpacity, StyleSheet,fontSize } from 'react-native'
//import data from '../.expo/data/Data'

function ListCard (props) {
        return(
        <View >
            {/* Second Row */}
           <TouchableOpacity>
            <View style={[styles.cardstyle,styles.direction]}>
                <View style={{flex:1,paddingLeft:6}}>
                    <Image style={{width:60,height:60,borderRadius:100,margin:3}} source={{uri:'https://images.pexels.com/photos/3700513/pexels-photo-3700513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
               
                 </View>
                 <View style={{flex:3,justifyContent:'flex-start',padding:9,borderBottomColor:'white',borderBottomWidth:1}}>
               <View style={{flex:1}}>
        <Text style={{color:'white'}}>{props.d3.name}</Text>
        <Text style={{color:'white',fontSize:10}}>{props.d3.status}</Text>
                </View>
               <View style={{flexf:1}}>
                 <Text style={{fontSize:11,color:'white',}}>7.21</Text>
               </View>
            </View>
            </View>
            {/* Third Row */}
            <View>

            </View>
            </TouchableOpacity>
        </View>
        )
    }




const styles=StyleSheet.create({
    chatHeader:{flexDirection:'row',flex:1,height:140,borderWidth:1,},

    cardstyle:{height:80,paddingTop:2
    },
    direction:{flexDirection:'row',},
  
})
export default ListCard