import React from 'react'
import {Scene,Router} from 'react-native-router-flux'
import Screen1 from  '../Screens/LoginScreen'
import Screen2 from  '../Screens/Screen2'
import Screen3 from  '../Screens/SigUp'
import LoginScreen from '../Screens/LoginScreen'
import SigUp from '../Screens/SigUp'
import ScrolView  from '../Screens/ScrolView'
export default function Routing (){
    return(
        <Router>
            <Scene key={'root'}>
                <Scene hideNavBar initial key='LoginScreen' component={LoginScreen} title='Screen 1'/>
                <Scene   key='screen2' component={Screen2} title='Profile'/>                
                <Scene hideNavBar key='SigUp' component={SigUp} title='Sign Up'/>
                <Scene hideNavBar key='ScrolView' component={ScrolView} title='Sign Up'/>

            </Scene>
        </Router>
    )
}