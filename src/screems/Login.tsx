import { Image, Text, View } from "react-native"
import React from 'react';

import inicioStyle from "../styles/inicioStyle";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import registerStyle from '../styles/registerStyle';
let logoApiUbademy = '../assets/ubademyLogo.png';

export const Login = () => {
    
    return (
        <View style={inicioStyle.contentInputs}>
            <Image 
                style={registerStyle.imgLogo}
                source={require(logoApiUbademy)} />
           <View 
                style={inicioStyle.contentInput}
            >
                <TextInput
                    style={inicioStyle.inputText}
                    placeholder='User'
                    placeholderTextColor = "white"
                />    
            </View>
            <View 
                style={inicioStyle.contentInput}
            >
                <TextInput
                    style={inicioStyle.inputText}
                    placeholder='Password'
                    placeholderTextColor = "white"
                />    
            </View>
            <View 
                style={
                    inicioStyle.bottomLogin
                }
            >
                <TouchableOpacity 
                >
                        <Text style={inicioStyle.textBottomColor}>REGISTRARSE</Text>
                </TouchableOpacity>    
            </View>
           <Text>Recover Password</Text>
        </View>
    )
}
