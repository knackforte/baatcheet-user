import React from 'react'
import { View,Text, TextInput,Image,ImageBackground, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import ListCard from './ListCard'
const Data = [
    {
      id: '1',
      name: 'Ahmad Bilal',
      status:'Looks Good'
    },
    {
      id: '2',
      name: 'Saqlain',
      status:'Smooking right know'
    },
    {
      id: '3',
      name: 'Abdullah',
      status:'sleeping right know'
    },
    {
        id: '4',
        name: 'Ahmad Bilal',
        status:'Looks Good'
      },
      {
        id: '6',
        name: 'Saqlain',
        status:'Smooking right know'
      },
      {
        id: '7',
        name: 'Abdullah',
        status:'sleeping right know'
      },
      {
        id: '8',
        name: 'Ahmad Bilal',
        status:'Looks Good'
      },
      {
        id: '9',
        name: 'Saqlain',
        status:'Smooking right know'
      },
      {
        id: '10',
        name: 'Abdullah',
        status:'sleeping right know'
      }
];

class ScrolView extends React.Component{
    render(){
        return(
        <ImageBackground  style={{flex:1}} source={{uri:'https://images.pexels.com/photos/1265952/pexels-photo-1265952.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}>
                 <View style={{flex:1,backgroundColor:'#234a2561'}}>
            <View style={{flex:1}}>

                 {/* first Row */}
                 <View style={{flexDirection:'row',backgroundColor:'#B14B4A',height:100}}>
                 <View style={{flex:1,backgroundColor:'#234a2561',padding:10}}>
                    <View style={{flex:1}}>
                    <Text style={{color:'white',fontSize:28,textAlign:'left',paddingTop:40,}}>Chat</Text>
                    </View>
                 <View style={{flex:1,paddingBottom:20}}>
                 <TouchableOpacity style={{padding:10}}>
                            <Text style={{color:'white',fontSize:28,textAlign:'right',}}>+</Text></TouchableOpacity>
                    </View>
                    </View>
                    
                </View>
               <FlatList
                data={Data}
                renderItem={({ item }) => (
                <ListCard d3={item} />
                )}/>
      
                <View style={{flexDirection:'row',paddingBottom:5,backgroundColor:'#B14B4A'}}>
                  
                    <View style={{flex:1}}>
                          <TouchableOpacity >
                            <Text style={{color:'white',fontSize:28,textAlign:'center'}}>+</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                          <TouchableOpacity >
                            <Text style={{color:'white',fontSize:28,textAlign:'center'}}>+</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                          <TouchableOpacity >
                            <Text style={{color:'white',fontSize:28,textAlign:'center'}}>+</Text></TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                          <TouchableOpacity >
                            <Text style={{color:'white',fontSize:28,textAlign:'center'}}>+</Text></TouchableOpacity>
                    </View>
                </View>
      

        </View>
        </View>
   </ImageBackground>
        )
    }
}
export default ScrolView