import React from 'react'
import { Image, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import inicioStyle from '../styles/inicioStyle';
import registerStyle from '../styles/registerStyle';

export const Registro = () => {
    let logoApiUbademy = '../assets/ubademyLogo.png';
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
                        placeholder='User name'
                        placeholderTextColor = "white"
                />     
            </View>
            <View 
                style={inicioStyle.contentInput}
            >
                <TextInput
                    style={inicioStyle.inputText}
                    placeholder='Mail'
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
                style={inicioStyle.contentInput}
            >
                <TextInput
                    style={inicioStyle.inputText}
                    placeholder='re-Password'
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
        </View>
    )
}
