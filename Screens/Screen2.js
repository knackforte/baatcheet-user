import React from 'react'
import {
    View,
    Text,
    Button,
    ImageBackground,
    Image,
    TextInput
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import {Actions} from 'react-native-router-flux'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default class Screen2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
    }
    renderProfileImage = () => {
        if (this.state.image) {
            return (<Image
                source={{
                uri: image
            }}
                style={{
                width: '100%',
                marginTop: 20,
                resizeMode: "cover",
                height: 175,
                borderRadius: 100,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "white"
            }}/>)
        } else {
            alert(1)
        }
    }
    render() {
        let {image} = this.state;
        return (

            <ImageBackground
                style={{
                flex: 1
            }}
                source={require('../assets/images/background.jpeg')}>
                <View
                    style={{
                    flex: 1,
                    paddingTop:50,
                    backgroundColor: '#234a2561'
                }}>

                    <View
                        style={{
                        alignItems: 'center'
                    }}>

                        <View
                            style={{
                            width: 175,
                            height: 175
                        }}>
                            {/* { <Image
                            style={{
                            width: '100%',
                            marginTop: 20,
                            resizeMode: "cover",
                            height: 175,
                            borderRadius: 100,
                            alignSelf: "center",
                            borderWidth: 1,
                            borderColor: "white"
                        }}
                            source={require('../index.jpg')}/> } */}
                            {/* {this.renderProfileImage} */}
                            {this.state.image
                                ? (<Image
                                    source={{
                                    uri: image
                                }}
                                    style={{
                                    width: '100%',
                                    marginTop: 20,
                                    resizeMode: "cover",
                                    height: 175,
                                    borderRadius: 100,
                                    alignSelf: "center",
                                    borderWidth: 1,
                                    borderColor: "white"
                                }}/>)
                                : (<Image
                                    style={{
                                    width: '100%',
                                    marginTop: 20,
                                    resizeMode: "cover",
                                    height: 175,
                                    borderRadius: 100,
                                    alignSelf: "center",
                                    borderWidth: 1,
                                    borderColor: "white"
                                }}
                                    source={require('../index.jpg')}/>)}
                            <View
                                style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 0,
                                bottom: 0
                            }}>
                                <TouchableOpacity onPress={this._pickImage}>
                                    <Image
                                        style={{
                                        width: 20,
                                        height: 20,
                                        resizeMode: "cover"
                                    }}
                                        source={{
                                        uri: 'http://www.icons101.com/icons/93/Mono_General_3_by_Custom_Icon_Design/128/camera.png'
                                    }}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        padding: 10
                    }}>
                        <TextInput
                            textContentType={"username"}
                            placeholderTextColor={"white"}
                            placeholder={"Your name"}
                            style={{
                            color: "white",
                            padding: 10,
                            margin: 10,
                            marginTop: 50,
                            height: 50,
                            borderColor: 'white',
                            borderWidth: 1,
                            borderRadius: 9
                        }}/>
                    </View>
                </View>
            </ImageBackground>

        )

    }
    componentDidMount() {
        this.getPermissionAsync();
        console.log('hi');
    }

    getPermissionAsync = async() => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [
                4, 3
            ],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };
}